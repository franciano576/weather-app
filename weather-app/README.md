# Weather App - Previsão do Tempo Moderna 🌤️

## 🚀 Como foi feito

App desenvolvido 100% frontend **sem backend/servidor**, usando apenas tecnologias web nativas.

### Processo de Desenvolvimento:
1. **Design**: UI moderna responsiva com CSS Grid/Flexbox, gradientes animados, glassmorphism (backdrop-filter), loader spinner.
2. **Funcionalidades**:
   - Busca cidade → Nominatim API (free geocoding BR)
   - GPS → navigator.geolocation
   - Clima/previsão → OpenWeatherMap API
3. **Melhorias**: async/await, fetch, localStorage (API key), mock data para teste.
4. **Responsivo**: Mobile-first com media queries.
5. **Versionamento**: Git/GitHub public.

Tempo: Rápido protótipo → app completo funcional.

## 🛠️ Tecnologias Usadas

| Categoria | Tecnologia |
|-----------|------------|
| **HTML** | HTML5 (semântica, viewport) |
| **CSS** | CSS3 (Flexbox/Grid, Animations, Gradientes, Responsive, Backdrop-filter) |
| **JS** | Vanilla JavaScript ES6+ (async/await, fetch, eventListeners, DOM) |
| **APIs** | OpenWeatherMap (clima), Nominatim OSM (geocode) |
| **Browser** | Geolocation API, localStorage |
| **Tools** | VS Code, GitHub, Chrome DevTools |

**Sem frameworks/libs** - puro vanilla!

## 📱 Como Usar

1. **API Key grátis**:
   ```
   openweathermap.org/api → Sign Up → API Keys (32 chars)
   ```

2. **Executar**:
   ```
   Abra index.html no navegador
   Cole API Key (salva localmente)
   Busque 'São Paulo' ou clique 'Minha Localização' (GPS)
   ```

## ✨ Features
- ✅ Busca cidade + coords
- ✅ GPS automático + nome cidade
- ✅ Clima atual (temp, umidade, vento, ícone)
- ✅ Previsão 5 dias min/max
- ✅ Loading + error handling
- ✅ Mock data offline
- ✅ 100% responsivo (desktop/mobile)

## 📁 Estrutura do Projeto
```
weather-app/
├── index.html     # UI principal
├── style.css      # Design responsivo
├── main.js        # Toda lógica (APIs + GPS)
├── demo-data.js   # Dados mock teste
└── README.md      # 📖 Você está aqui!
```

## 🔗 Links
- **Live Demo**: [GitHub Pages](https://franc**iano.github.io/weather-app)
- **APIs**: [OpenWeather](https://openweathermap.org) | [Nominatim](https://nominatim.openstreetmap.org)

**Open Source 100% gratuito** - fork, star, contribua! ⭐

Desenvolvido com ❤️ por Franciano
