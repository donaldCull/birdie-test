async function makeApiRequest(endpoint: string) {
  const response = await fetch(`http://localhost:8000/${endpoint}`);
  const jsonData = await response.json();
  console.log(jsonData);
}

export default makeApiRequest;