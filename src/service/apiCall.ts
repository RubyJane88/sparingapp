const baseURL = "http://localhost:4000";

export async function getAccountGroups() {
  const response = await fetch(baseURL + "/sparing/group", {
    method: "GET",
  });
  return response.json();
}
