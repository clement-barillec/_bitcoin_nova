const usdElement = document.getElementById("usd");
const eurElement = document.getElementById("eur");
const updateElement = document.getElementById("update");

async function fetchBitcoinPrice() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur"
    );

    const data = await response.json();

    const usdPrice = data.bitcoin.usd;
    const eurPrice = data.bitcoin.eur;

    usdElement.textContent = `USD — ${usdPrice.toLocaleString()} $`;
    eurElement.textContent = `EUR — ${eurPrice.toLocaleString()} €`;

    const now = new Date();
    updateElement.textContent =
      "mis à jour à " + now.toLocaleTimeString();

  } catch (error) {
    updateElement.textContent = "erreur de chargement";
    console.error(error);
  }
}

fetchBitcoinPrice();

setInterval(fetchBitcoinPrice, 30000);
