// Dados de demonstração para teste sem API key (São Paulo)
// Substitua o fetch por estes dados para demo offline

const demoToday = {
  name: "São Paulo",
  main: { temp: 24, humidity: 75 },
  weather: [{ description: "nublado", icon: "04d" }],
  wind: { speed: 3.5 }
};

const demoForecastList = [
  // 40 itens simulando 5 dias (8x por dia)
  { dt: Math.floor(Date.now() / 1000) + 3600*3, main: { temp: 23 }, weather: [{ icon: "10d" }] },
  { dt: Math.floor(Date.now() / 1000) + 3600*6, main: { temp: 22 }, weather: [{ icon: "10d" }] },
  // ... (mais dados)
  { dt: Math.floor(Date.now() / 1000) + 86400*4 + 3600*12, main: { temp: 26 }, weather: [{ icon: "01d" }] }
];
