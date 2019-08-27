async function apiRequest(method,url,data) {
  const token = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : '';

  let response = await fetch(`http://localhost:3333${url}`, {
    method: `${method}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token
    },
    body: data
  })
  let json = await response.json()

  
  if (response.ok) {
    return json
  }

  return response.status
}

export default apiRequest;