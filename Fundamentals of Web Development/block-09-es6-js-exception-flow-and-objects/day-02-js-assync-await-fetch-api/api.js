const API_URL = 'https://api.coincap.io/v2/assets';
const cryptoContainer = document.getElementById('cryptoContainer');

const fetchApi = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then(({ data }) => {
      const firstTen = data.slice(0, 10);
      firstTen.forEach(({ name, symbol, priceUsd }) => {
        const li = `<li>${name} ${symbol}: ${Number(priceUsd).toFixed(2)}</li>`;
        cryptoContainer.insertAdjacentHTML('beforeend', li);
      });
    })
    .catch((error) => console.error(error));
};

window.onload = () => fetchApi();
