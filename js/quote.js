fetch("https://api.quotable.io/random?maxLength=70")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("quotes").innerHTML = `"${data.content}"`;
  })
  .catch((err) => {
    document.getElementById(
      "quotes"
    ).innerHTML = `"Consistency is the key to Success."`;
  });