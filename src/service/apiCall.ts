// apiCall.ts
const baseURL = import.meta.env.VITE_API_BASE_URL;


export async function getAccountGroups() {
  const response = await fetch(`${baseURL}/sparing/group`, {
    method: "GET",
  });
  return response.json();
}

export async function getSavingsAccount() {
  const response = await fetch(`${baseURL}/sparing`, {
    method: "POST",
  });
  return response.json();
}
