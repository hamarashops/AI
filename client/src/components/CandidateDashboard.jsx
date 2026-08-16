import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getCandidateProfile,
  updateCandidateProfile,
  applyCandidate,
} from "../services/candidates";
import { BASE_URL } from "../services/api";
import logo from "../assets/hamarashopslogo.png";

const CandidateDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [editFormData, setEditFormData] = useState({
    FullName: "",
    Phone: "",
    Address: "",
  });
  const navigate = useNavigate();

  const fileRoot = BASE_URL.split("/api")[0] + "/";

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(loggedInUser);
    setUser(userData);
    fetchProfile(userData.Id);
  }, [navigate]);

  useEffect(() => {
    if (profile) {
      setEditFormData({
        FullName: profile.FullName || "",
        Phone: profile.Phone || "",
        Address: profile.Address || "",
      });
    }
  }, [profile]);

  const fetchProfile = async (userId) => {
    console.log("Fetching profile for userId:", userId);
    try {
      const response = await getCandidateProfile(userId);
      console.log("Profile response:", response);
      if (response.status === 1 && response.data && response.data.length > 0) {
        setProfile(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handeEditSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("CandidateProfileId", profile.Id);
      formDataToSend.append("FullName", editFormData.FullName);
      formDataToSend.append("Phone", editFormData.Phone);
      formDataToSend.append("Address", editFormData.Address);
      formDataToSend.append("UpdatedByUserId", user.Id);
      if (selectedFile) {
        formDataToSend.append("resume", selectedFile);
      }

      const result = await updateCandidateProfile(formDataToSend);
      if (result.status === 1) {
        // Automatically re-apply after successful update
        await applyCandidate({
          CandidateProfileId: profile.Id,
          UserId: user.Id,
        });

        toast.success(
          "Profile updated and application re-submitted successfully!",
        );
        setIsEditModalOpen(false);
        fetchProfile(user.Id);
      } else {
        toast.error(result.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("An error occurred while updating your profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-primary font-bold animate-pulse">
          Loading Profile...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-primary text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-display font-black tracking-tight">
              Candidate Portal
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-accent hover:bg-white hover:text-accent text-white px-4 py-2 rounded font-bold text-sm transition-all shadow-md"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-gradient-to-r from-primary to-slate-800 p-8 text-white relative">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-display font-black tracking-tight uppercase">
                  Welcome, {profile?.FullName}
                </h2>
                <p className="text-white/60 mt-1 font-medium italic">
                  Application Status:{" "}
                  <span className="text-accent uppercase not-italic font-bold">
                    {profile?.Status}
                  </span>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">
                  Registered Email
                </p>
                <p className="font-bold text-sm">{profile?.UserEmail}</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>

          <div className="p-8 md:p-12">
            {profile?.Status === "Rejected" && (
              <div className="mb-8 p-6 bg-rose-50 border border-rose-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-rose-500 p-3 rounded-full text-white shadow-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-rose-900 font-black uppercase text-sm tracking-tight">
                      Application Re-evaluation Required
                    </h4>
                    <p className="text-rose-600/80 text-xs font-bold leading-relaxed">
                      Update your information and re-apply to be reviewed again.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all w-full md:w-auto"
                >
                  Update & Re-apply
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">
                        Phone Number
                      </label>
                      <p className="text-primary font-bold text-lg">
                        {profile?.Phone}
                      </p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">
                        Address
                      </label>
                      <p className="text-primary font-bold text-lg">
                        {profile?.Address}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">
                    Documents
                  </h3>
                  <a
                    href={`${BASE_URL}/viewResume/${profile?.ResumeFileName?.split("/").pop()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-slate-50 border border-slate-200 p-4 rounded-xl hover:bg-accent hover:text-white hover:border-accent transition-all group lg:min-w-64"
                  >
                    <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-accent group-hover:text-white"
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
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider">
                        Candidate Resume
                      </p>
                      <p className="text-[10px] opacity-60">
                        Click to View PDF
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-primary font-black uppercase text-sm tracking-widest mb-6 border-b border-slate-200 pb-2 text-center">
                  Application Timeline
                </h3>
                <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  <div className="relative pl-10">
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm transition-colors ${
                        profile?.Status === "Rejected"
                          ? "bg-rose-500"
                          : profile?.UpdatedAt || profile?.CreatedAt
                            ? "bg-emerald-500"
                            : "bg-slate-300"
                      }`}
                    ></div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                      {profile?.Status === "Pending" && profile?.UpdatedAt
                        ? "Application Re-submitted"
                        : "Application Submitted"}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {(profile?.Status === "Rejected" ||
                        profile?.Status === "Pending") &&
                      profile?.UpdatedAt
                        ? (() => {
                            const date = new Date(
                              profile.UpdatedAt +
                                (profile.UpdatedAt.endsWith("Z") ? "" : "Z"),
                            );
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
                          })()
                        : profile?.CreatedAt
                          ? (() => {
                              const date = new Date(
                                profile.CreatedAt +
                                  (profile.CreatedAt.endsWith("Z") ? "" : "Z"),
                              );
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
                            })()
                          : "Pending"}
                    </p>
                  </div>

                  <div className="relative pl-10">
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm transition-colors ${
                        profile?.Status === "Rejected"
                          ? "bg-rose-500"
                          : profile?.Shortlisted
                            ? "bg-emerald-500"
                            : "bg-slate-300"
                      }`}
                    ></div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Profile Shortlisted
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {profile?.Status === "Rejected"
                        ? "Application Rejected"
                        : profile?.Shortlisted
                          ? "Congratulations! You are shortlisted"
                          : "Under Review"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden animate-fade-in-up duration-300 my-auto">
            <div className="bg-rose-500 p-6 text-white text-center">
              <h3 className="text-xl font-display font-black uppercase tracking-tighter">
                Re-apply for Review
              </h3>
              <p className="text-white/80 text-xs mt-1 font-bold">
                Please update your profile information
              </p>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedFile(null);
                }}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
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
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form
              className="p-6 space-y-4 max-h-[80vh] overflow-y-auto"
              onSubmit={handeEditSubmit}
            >
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  name="FullName"
                  value={editFormData.FullName}
                  onChange={handleEditInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-primary focus:outline-none focus:border-rose-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">
                  Current Address
                </label>
                <input
                  type="text"
                  name="Address"
                  value={editFormData.Address}
                  onChange={handleEditInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-primary focus:outline-none focus:border-rose-500 transition-colors"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">
                  New Resume (Optional)
                </label>
                <label
                  htmlFor="resume-upload"
                  className="mt-1 flex justify-center px-4 py-6 border-2 border-slate-200 border-dashed rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group"
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-10 w-10 text-slate-400 group-hover:text-rose-500 transition-colors"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-xs font-bold text-slate-600">
                      {selectedFile
                        ? selectedFile.name
                        : "Upload new resume or drag and drop"}
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase font-black">
                      PDF, DOC, DOCX up to 10MB
                    </p>
                  </div>
                  <input
                    id="resume-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-500 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all disabled:opacity-50 mt-4"
              >
                {isSubmitting ? "Processing..." : "Submit Re-application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateDashboard;
