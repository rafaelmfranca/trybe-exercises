const fetchCryptoApi = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const response = await fetch(url);
    const { data } = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error(error.message);
  }
};

const fetchCurrencyApi = async () => {
  try {
    const url =
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

    const response = await fetch(url);
    const {
      usd: { brl },
    } = await response.json();
    return brl;
  } catch (error) {
    console.error(error.message);
  }
};

const renderData = async () => {
  try {
    const firstTen = await fetchCryptoApi();
    const brlValue = await fetchCurrencyApi();
    const cryptoContainer = document.getElementById('cryptoContainer');

    firstTen.forEach(({ name, symbol, priceUsd }) => {
      const usdValue = Number(priceUsd);
      const li = `<li>${name} ${symbol}: R$ ${(usdValue * brlValue).toFixed(2)}</li>`;
      cryptoContainer.insertAdjacentHTML('beforeend', li);
    });
  } catch (error) {
    console.error(error.message);
  }
};

window.onload = () => renderData();
