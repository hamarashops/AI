import { BASE_URL } from "./api";

export const upsertCandidate = async (candidateData) => {
  try {
    // If candidateData is FormData, don't set Content-Type header manually
    // Fetch will set it automatically with the boundary
    const isFormData = candidateData instanceof FormData;
    
    const response = await fetch(`${BASE_URL}/upsertCandidate`, {
      method: "POST",
      headers: isFormData ? {} : {
        "Content-Type": "application/json",
      },
      body: isFormData ? candidateData : JSON.stringify(candidateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in upsertCandidate:", error);
    throw error;
  }
};

export const createUserWithProfile = async (userData) => {
  try {
    const isFormData = userData instanceof FormData;
    const response = await fetch(`${BASE_URL}/createUserWithProfile`, {
      method: "POST",
      headers: isFormData ? {} : {
        "Content-Type": "application/json",
      },
      body: isFormData ? userData : JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in createUserWithProfile:", error);
    throw error;
  }
};

export const updateCandidateProfile = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/updateCandidateProfile`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in updateCandidateProfile:", error);
    throw error;
  }
};

export const applyCandidate = async (candidateData) => {
  try {
    const response = await fetch(`${BASE_URL}/applyCandidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in applyCandidate:", error);
    throw error;
  }
};

export const getCandidateProfile = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/getCandidateProfileByUserId/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getCandidateProfile:", error);
    throw error;
  }
};
