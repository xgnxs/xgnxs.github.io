async function clickMe() {
  const catFact = document.getElementById("cat-fact");
  catFact.innerHTML = "getting a cat fact... hang in there!";

  let response = await fetch("https://meowfacts.herokuapp.com");
  let result = await response.json();
  for (const item of result.data) {
    catFact.innerHTML = item;
  }
}
