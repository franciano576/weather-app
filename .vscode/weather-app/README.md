# App de Previsão do Tempo

## Como usar

1. **Obtenha uma API Key gratuita**:
   - Vá para [OpenWeatherMap](https://openweathermap.org/api)
   - Crie conta gratuita
   - Copie sua API Key (32 caracteres)

2. **Execute o app**:
   - Abra `index.html` no navegador (Chrome/Firefox)
   - Na primeira vez, insira sua API Key quando solicitado
   - Digite cidade (ex: \"São Paulo\") e clique Buscar
   - Ou use \"Minha Localização\" (permite acesso GPS)

3. **Funcionalidades**:
   - Clima atual: temperatura, descrição, umidade, vento, ícone
   - Previsão 5 dias: min/max temp, condição por dia
   - Suporte pt-BR, unidades °C
   - Geolocalização automática

## Estrutura
- `index.html`: Interface
- `style.css`: Estilos responsivos
- `main.js`: Lógica API + geolocalização

App 100% frontend, sem servidor. Testado em desktop/mobile.
