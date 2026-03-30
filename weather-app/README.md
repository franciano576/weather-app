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
| **Tools** | VS Code, Git/GitHub para versionamento |

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
├── index.html     # Interface principal (abra este!)
├── style.css      # Design responsivo
├── main.js        # Lógica APIs + GPS
├── demo-data.js   # Mock teste
└── README.md      # Você aqui!
```

## 🔗 Live Demo
404? Configure **GitHub Pages**:
1. Repo Settings → Pages
2. Source: "Deploy from branch main" + "/ (root)"
3. Salva → https://franc**iano.github.io/recapitulando vira demo live!

Local: `index.html` abre direto (reconhecido navegador).

**Open Source gratuito** - star/contribua! ⭐

Feito com ❤️ por Franciano
