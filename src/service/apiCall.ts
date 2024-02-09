// apiCall.ts
const baseURL = import.meta.env.VITE_API_BASE_URL;


export async function getAccountGroups() {
  try {
    const response = await fetch(baseURL + "/sparing/group", {
      method: "GET",
    });
  
    if (!response.ok) {
      // Handle non-successful response (e.g., 404, 500)
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
  
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getSavingsRecommendation(payload: any) {
  const response = await fetch(`${baseURL}/sparing`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }

  }
  );
  return response.json();
}

