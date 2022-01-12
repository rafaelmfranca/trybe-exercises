// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => jokeContainer.append(data.joke))
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();
