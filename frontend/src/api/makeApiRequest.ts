export default async function makeApiRequest(endpoint: string) {
  const response = await fetch(`http://localhost:8000/${endpoint}`);
  const jsonData = await response.json();
  return jsonData;
}
