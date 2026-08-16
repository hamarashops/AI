import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getAllCandidates,
  shortlistCandidate,
  rejectCandidate,
  getShortlistSnapshots,
} from "../services/admin";
import { BASE_URL } from "../services/api";
import logo from "../assets/hamarashopslogo.png";

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    type: "", // 'shortlist' or 'reject'
    candidateId: null,
  });
  const navigate = useNavigate();

  // Extract file root URL (http://172.10.10.107:82/)
  const fileRoot = BASE_URL.split("/api")[0] + "/";

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(loggedInUser));
    fetchCandidates();
  }, [navigate]);

  const fetchCandidates = async () => {
    try {
      const response = await getAllCandidates();
      if (response.status === 1) {
        setCandidates(response.data);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShortlist = async (candidateId) => {
    setConfirmModal({
      isOpen: true,
      type: "shortlist",
      candidateId: candidateId,
    });
  };

  const executeShortlist = async (candidateId) => {
    try {
      if (!user || !user.Id) {
        toast.error("Admin session not found. Please login again.");
        return;
      }

      const response = await shortlistCandidate(candidateId, user.Id);
      if (response.status === 1) {
        toast.success("Candidate shortlisted successfully!");
        fetchCandidates(); // Refresh the list
      } else {
        toast.error(response.message || "Failed to shortlist candidate");
      }
    } catch (error) {
      toast.error("Error shortlisting candidate. Please try again.");
    } finally {
      setConfirmModal({ isOpen: false, type: "", candidateId: null });
    }
  };

  const handleReject = async (candidateId) => {
    setConfirmModal({
      isOpen: true,
      type: "reject",
      candidateId: candidateId,
    });
  };

  const executeReject = async (candidateId) => {
    try {
      if (!user || !user.Id) {
        toast.error("Admin session not found. Please login again.");
        return;
      }

      const response = await rejectCandidate(candidateId, user.Id);
      if (response.status === 1) {
        toast.success("Candidate rejected successfully!");
        fetchCandidates(); // Refresh the list
      } else {
        toast.error(response.message || "Failed to reject candidate");
      }
    } catch (error) {
      console.error("Reject error:", error);
      toast.error("Error rejecting candidate. Please try again.");
    } finally {
      setConfirmModal({ isOpen: false, type: "", candidateId: null });
    }
  };

  const fetchHistory = async (candidateId) => {
    try {
      const response = await getShortlistSnapshots(candidateId);
      if (response.status === 1) {
        setHistory(response.data);
        setIsHistoryOpen(true);
      } else {
        toast.error("No history found for this candidate.");
      }
    } catch (error) {
      console.error("Error fetching history:", error);
      toast.error("Error loading history.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar/Header */}
      <nav className="bg-primary text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-display font-black tracking-tight">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold">{user?.Email}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/50">
                {user?.Role}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-accent hover:bg-white hover:text-accent text-white px-4 py-2 rounded font-bold text-sm transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-primary uppercase tracking-wider">
              Candidate Applications
            </h2>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
              Total: {candidates.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-12 text-center text-slate-400">
                Loading candidates...
              </div>
            ) : candidates.length > 0 ? (
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      ID
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Candidate Name
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Address
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Manage Status
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      History
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Resume
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {candidates.map((candidate) => (
                    <tr
                      key={candidate.Id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-slate-400">
                        #{candidate.Id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-primary">
                          {candidate.FullName}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {(() => {
                            const date = new Date(candidate.CreatedAt);
                            return date
                              .toLocaleString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                                timeZone: "UTC",
                              })
                              .replace(/\//g, "-")
                              .replace(",", " ,");
                          })()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-slate-700">
                          {candidate.UserEmail}
                        </div>
                        <div className="text-xs text-slate-500 font-mono">
                          {candidate.Phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {candidate.Address}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-2">
                          {candidate.Status === "Shortlisted" ? (
                            <>
                              <span className="flex items-center text-emerald-600 font-bold text-[10px] uppercase tracking-tighter">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Shortlisted
                              </span>
                              <button
                                onClick={() => handleReject(candidate.Id)}
                                className="bg-slate-100 hover:bg-rose-500 hover:text-white text-slate-600 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95"
                              >
                                Reject Now
                              </button>
                            </>
                          ) : candidate.Status === "Rejected" ? (
                            <>
                              <span className="flex items-center text-rose-600 font-bold text-[10px] uppercase tracking-tighter">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Rejected
                              </span>
                              <button
                                onClick={() => handleShortlist(candidate.Id)}
                                className="bg-slate-800 hover:bg-emerald-600 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95"
                              >
                                Shortlist Now
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => handleShortlist(candidate.Id)}
                                className="bg-slate-800 hover:bg-emerald-600 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95"
                              >
                                Shortlist Now
                              </button>
                              <button
                                onClick={() => handleReject(candidate.Id)}
                                className="bg-slate-100 hover:bg-rose-500 hover:text-white text-slate-600 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95"
                              >
                                Reject Now
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => fetchHistory(candidate.Id)}
                          className="text-[10px] font-bold text-primary hover:text-accent border border-primary/20 bg-primary/5 px-2 py-1 rounded transition-colors uppercase tracking-widest"
                        >
                          View History
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`${BASE_URL}/viewResume/${candidate.ResumeFileName?.split("/").pop()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:underline text-xs font-bold"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          View PDF
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${
                            candidate.Status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : candidate.Status === "Rejected"
                                ? "bg-red-100 text-red-700"
                                : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {candidate.Status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center text-slate-400">
                No candidates found.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* History Modal */}
      {isHistoryOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-xl font-display font-black text-primary uppercase tracking-tight">
                  Candidate History
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Status Snapshots
                </p>
              </div>
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-slate-200 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 bg-white">
              {history && history.length > 0 ? (
                <div className="relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                  {history.map((snapshot, index) => (
                    <div
                      key={snapshot.Id}
                      className="relative pl-10 mb-8 last:mb-0"
                    >
                      <div
                        className={`absolute left-0 top-1 w-8 h-8 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 ${
                          snapshot.Status === "Shortlisted"
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }`}
                      >
                        {snapshot.Status === "Shortlisted" ? (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-primary/20 transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <span
                            className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              snapshot.Status === "Shortlisted"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-rose-100 text-rose-700"
                            }`}
                          >
                            {snapshot.Status}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 italic">
                            {(() => {
                              const date = new Date(snapshot.ShortlistedAt);
                              return date
                                .toLocaleString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                  timeZone: "UTC",
                                })
                                .replace(/\//g, "-")
                                .replace(",", " ,");
                            })()}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-slate-700 capitalize">
                          Action taken on {snapshot.FullName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-300">
                    <svg
                      className="w-8 h-8 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                    No history records found
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg"
              >
                Close History
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] animate-fade-in"
            onClick={() =>
              setConfirmModal({ isOpen: false, type: "", candidateId: null })
            }
          ></div>

          <div className="bg-white w-full max-w-[360px] rounded-3xl shadow-2xl relative overflow-hidden animate-spring-up border border-slate-100">
            <div className="p-8 text-center">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 transition-transform hover:rotate-0 duration-500 ${
                  confirmModal.type === "shortlist"
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    : "bg-rose-50 text-rose-600 border border-rose-100"
                }`}
              >
                {confirmModal.type === "shortlist" ? (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                {confirmModal.type === "shortlist"
                  ? "Shortlist Candidate?"
                  : "Confirm Rejection?"}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed px-4">
                This action will update the candidate's status and notify them
                of the decision.
              </p>
            </div>

            <div className="px-8 pb-8 flex flex-col gap-3">
              <button
                onClick={() =>
                  confirmModal.type === "shortlist"
                    ? executeShortlist(confirmModal.candidateId)
                    : executeReject(confirmModal.candidateId)
                }
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-lg transition-all active:scale-[0.98] text-white ${
                  confirmModal.type === "shortlist"
                    ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200"
                    : "bg-rose-600 hover:bg-rose-700 shadow-rose-200"
                }`}
              >
                Confirm {confirmModal.type}
              </button>
              <button
                onClick={() =>
                  setConfirmModal({
                    isOpen: false,
                    type: "",
                    candidateId: null,
                  })
                }
                className="w-full bg-white text-slate-400 py-3 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:text-slate-600 transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
