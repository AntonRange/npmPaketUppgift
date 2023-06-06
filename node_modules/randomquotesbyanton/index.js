function fetchQuotes() {
  return fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

module.exports = { fetchQuotes };
