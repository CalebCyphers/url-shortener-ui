export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (longUrl, title) => {
  return fetch('http://localhost:3001/api/vi/urls', { method: 'POST', body: {long_url: longUrl, title: title} })
    .then(response => response.json())
}
