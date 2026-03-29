document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('city').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') getWeather();
  });
});

async function getCoordsFromCity(city) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1&countryCodes=br`);
    const data = await response.json();
    if (data && data[0]) {
      return { lat: parseFloat(data[0].lat).toFixed(6), lng: parseFloat(data[0].lon).toFixed(6) };
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function getCityFromCoords(lat, lng) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
    const data = await response.json();
    return data.display_name || data.address.city || 'Localização desconhecida';
  } catch (e) {
    return 'Localização não encontrada';
  }
}

async function getWeather() {
  const city = document.getElementById("city").value;
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");

  if (!city) {
    document.getElementById("result-today").innerHTML = "<p>Por favor, digite o nome da cidade.</p>";
    loader.classList.add("hidden");
    return;
  }

  window.currentLat = null;
  window.currentLng = null;
  const coords = await getCoordsFromCity(city);
  if (coords) {
    window.currentLat = coords.lat;
    window.currentLng = coords.lng;
  }

  setTimeout(() => {
    loader.classList.add("hidden");

    const conditions = [
      { desc: "ensolarado quente", icon: "01d", temp: 33 + Math.floor(Math.random()*3), humidity: 40 },
      { desc: "parcialmente nublado", icon: "02d", temp: 28, humidity: 60 },
      { desc: "chuvoso", icon: "10d", temp: 22, humidity: 85 },
      { desc: "nublado frio", icon: "04d", temp: 16, humidity: 75 },
      { desc: "nevando muito frio", icon: "13d", temp: 5, humidity: 90 },
      { desc: "trovoada", icon: "11d", temp: 26, humidity: 70 }
    ];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const wind = (2 + Math.random()*6).toFixed(1);

    const dataToday = {
      name: city,
      main: { temp: condition.temp, humidity: condition.humidity },
      weather: [{ description: condition.desc, icon: condition.icon }],
      wind: { speed: wind }
    };

    let locationInfo = dataToday.name;
    if (window.currentLat && window.currentLng) {
      locationInfo = `${dataToday.name} (${window.currentLat}, ${window.currentLng})`;
    }

    document.getElementById("result-today").innerHTML = `<div class="card">
      <h2>${locationInfo}</h2>
      <p>${dataToday.weather[0].description}</p>
      <p><strong>${dataToday.main.temp}°C</strong></p>
      <p>Umidade: ${dataToday.main.humidity}%</p>
      <p>Vento: ${dataToday.wind.speed} m/s</p>
      <img src="https://openweathermap.org/img/wn/${dataToday.weather[0].icon}@2x.png" alt="Clima" />
    </div>`;

    let forecastHTML = "<h3>Próximos 5 dias</h3>";
    for (let day = 1; day <= 5; day++) {
      const dayCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const maxTemp = dayCondition.temp + 2;
      const minTemp = dayCondition.temp - 5;
      const date = new Date(Date.now() + day * 86400000).toLocaleDateString('pt-BR', {weekday: 'long', day: 'numeric', month: 'short'});
      
      forecastHTML += `<div class="card">
        <h4>${date}</h4>
        <p>${dayCondition.desc}</p>
        <p><strong>${maxTemp}° / ${minTemp}°</strong></p>
        <img src="https://openweathermap.org/img/wn/${dayCondition.icon}.png" alt="Previsão" />
      </div>`;
    }
    document.getElementById("result-forecast").innerHTML = forecastHTML;
  }, 2500);
}

function getLocationWeather() {
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);
      window.currentLat = lat;
      window.currentLng = lng;
      
      const cityName = await getCityFromCoords(lat, lng);
      setTimeout(() => {
        loader.classList.add("hidden");
        document.getElementById("city").value = cityName;
        getWeather();
      }, 2000);
    },
    () => {
      loader.classList.add("hidden");
      document.getElementById("result-today").innerHTML = '<p>Ative GPS ou use busca manual.</p>';
    }
  );
}

