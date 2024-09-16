async function API(word) {
  const api = await fetch(
    `https://api.weatherstack.com/current?access_key=0c925055acf0ff6c8dd8ceba26f9867d&query=${word}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (
        document.querySelector(".time-zone") == null &&
        document.querySelector("temperature") == null
      ) {
        extractLocation(data.location);
        extractDescription(data.current);
      } else if (
        document.querySelector(".time-zone") !== null &&
        document.querySelector(".temperature") !== null
      ) {
        document
          .querySelector(".location")
          .removeChild(document.querySelector(".time-zone"));
        document
          .querySelector(".location")
          .removeChild(document.querySelector(".local-time"));

        document
          .querySelector(".description")
          .removeChild(document.querySelector(".temperature-details"));
        setTimeout(() => {
          extractLocation(data.location);
          extractDescription(data.current);
        });
      } else {
        return;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return api;
}

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const word = searchInput.value;
  if (word == "") {
    alert(new Error("Input Can't be empty"));
  } else {
    API(word);
  }
});
