const openWeatherEndpoint = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'f7b75e7df1764f95999183cb58c71af9';
const command = 'weather';

export default function getLocalWeather(lat, long) {
    reqUrl = generateUrl(lat, long);

    return fetch(reqUrl);
}

function generateUrl(lat, long) {
    var uri = openWeatherEndpoint + command;

    // add lat and lon coords
    uri += '?lat=' + lat + '&lon=' + long;

    uri += '&units=imperial';   // get temp in F
    uri += '&APPID=' + apiKey;  // apikey

    return uri;
}
