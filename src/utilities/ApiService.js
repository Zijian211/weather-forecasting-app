const GEO_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = 'fb614ea1dbae5e969229a77ec3d78294';

const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'xxxx4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export async function fetchWeatherData(lat, lon) {
  try {
    let [weatherPromise, forcastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forcastResponse = await forcastPromise.json();
    return [weatherResponse, forcastResponse];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCities(input) {
  try {
    const response = await fetch(
      `${GEO_API_URL}?name=${input}&count=5&language=en&format=json`
    );

    const data = await response.json();

    const cities = data.results?.map(city => {
      const cityName = city.name || "Unknown";
      const country = city.country_code 
        ? city.country_code.toUpperCase() 
        : "N/A";

      return {
        name: `${cityName}, ${country}`,
        latitude: city.latitude ?? null,
        longitude: city.longitude ?? null
      };
    }) || [];

    return { data: cities };

  } catch (error) {
    console.log(error);
    return { data: [] };
  }
}
