const form = document.querySelector("form");
const input = document.querySelector("input");
const weatherImg = document.querySelector(".weather-img");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const para = document.querySelector(".text-para");
const contain = document.querySelector(".contain");
const body = document.querySelector("body");

const getWeather = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4a09027c7999443f82d120533231807&q=${input.value}&aqi=yes`
    );
    const data = await response.json();
    contain.style.display = "block";
    h2.innerText = data.location.name;
    h3.innerText = data.current.temp_c + "°c";
    humidity.innerText = data.current.humidity + "%";
    wind.innerText = data.current.wind_kph + " km/h";
    weatherImg.setAttribute("src", data.current.condition.icon);
    para.innerText = data.current.condition.text;
    body.style.backgroundImage = `url(https://source.unsplash.com/random/900×700/?${
      data.current.condition.text.split(" ")[0]
    })`;
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
  } catch (error) {
    window.alert("Please Enter Valid City Name!");
    contain.style.display = "none";
  }
  form.reset();
};

form.addEventListener("submit", getWeather);
