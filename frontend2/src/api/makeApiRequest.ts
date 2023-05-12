export default async function makeApiRequest(endpoint: string) {
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'http://don-test.eu-west-1.elasticbeanstalk.com/';
  const response = await fetch(`${baseUrl}${endpoint}`);
  const jsonData = await response.json();
  return jsonData;
}
