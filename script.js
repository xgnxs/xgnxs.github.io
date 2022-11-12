async function fetchCatFact() {
  const fetchFactButton = document.getElementById("fetch-fact-button");
  fetchFactButton.disabled = true;

  const catFact = document.getElementById("cat-fact");
  catFact.innerHTML = "getting a cat fact... hang in there!";

  const response = await fetch("https://meowfacts.herokuapp.com");
  const result = await response.json();
  for (const item of result.data) {
    catFact.innerHTML = item;
  }

  fetchFactButton.disabled = false;
}

async function coinFlip() {
  const flipButton = document.getElementById("flip-button");
  flipButton.disabled = true;

  const coinFlip = document.getElementById("coin-flip");
  coinFlip.innerHTML = "flipping...";

  await new Promise((r) => setTimeout(r, 500));

  const isHeads = Math.floor(Math.random() * 10000) % 2 === 0;
  coinFlip.innerHTML = isHeads ? "Heads!" : "Tails!";

  flipButton.disabled = false;
}
