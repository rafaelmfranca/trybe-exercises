const API_URL = 'https://api.coincap.io/v2/assets';

const fetchApi = async () => {
  const data = await fetch(API_URL)
    .then((response) => response.json())
    .then(({ data }) => data)
    .catch((error) => error.toString());

  return data;
};

const renderData = async () => {
  const data = await fetchApi();
  const cryptoContainer = document.getElementById('cryptoContainer');
  const firstTen = data.slice(0, 10);

  firstTen.forEach(({ name, symbol, priceUsd }) => {
    const li = `<li>${name} ${symbol}: ${Number(priceUsd).toFixed(2)}</li>`;
    cryptoContainer.insertAdjacentHTML('beforeend', li);
  });
};

window.onload = () => renderData();
