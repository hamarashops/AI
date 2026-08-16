import { BASE_URL } from "./api";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in login:", error);
    throw error;
  }
};

export const getAllCandidates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getAllCandidates`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getAllCandidates:", error);
    throw error;
  }
};

export const shortlistCandidate = async (candidateProfileId, adminUserId) => {
  try {
    const response = await fetch(`${BASE_URL}/shortlistCandidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CandidateProfileId: candidateProfileId,
        AdminUserId: adminUserId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in shortlistCandidate:", error);
    throw error;
  }
};

export const rejectCandidate = async (candidateProfileId, adminUserId) => {
  try {
    const response = await fetch(`${BASE_URL}/rejectCandidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CandidateProfileId: candidateProfileId,
        AdminUserId: adminUserId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in rejectCandidate:", error);
    throw error;
  }
};

export const getShortlistSnapshots = async (candidateProfileId) => {
  try {
    const response = await fetch(`${BASE_URL}/getShortlistSnapshots/${candidateProfileId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getShortlistSnapshots:", error);
    throw error;
  }
};
