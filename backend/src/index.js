const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const appId = process.env.APPID || 'cc7e0ddac5074e4087252bb7f7e2fea2';
const mapURI = process.env.MAP_ENDPOINT || "http://api.openweathermap.org/data/2.5";
const targetCity = process.env.TARGET_CITY || "Helsinki,fi";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchForecast = async () => {
  const endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  const response = await fetch(endpoint);

  return response ? response.json() : {}
};

router.get('/api/forecast', async ctx => {
  const forecastData = await fetchForecast();

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = forecastData.forecast ? forecastData.forecast[0] : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
