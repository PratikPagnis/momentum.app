function getCurrentTime() {
    const date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString(
      "en-us",
      { timeStyle: "short" }
    );
    document.getElementById("date").textContent = date.toLocaleDateString(
      "en-us",
      { day: "numeric", month: "long", year: "numeric" }
    );
  }
  
  setInterval(getCurrentTime, 1000);
  
  navigator.geolocation.getCurrentPosition((position) => {
    fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather").innerHTML = `
          <img src="${iconUrl}" />
          <span class="temp">${Math.round(data.main.temp)}°C</span>
          <span class="city">${data.name}</span>
        `;
      })
      .catch((err) => {
        document.getElementById("weather").textContent = "Data not available."
      });
  });