const axios = require('axios');

const URL = 'https://www.youtube.com/results?search_query=taylor+swift';

async function scrapeYouTube() {
  try {
    // Simula un navegador (si no me daba error)
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    };

    // Realiza la solicitud
    const response = await axios.get(URL, { headers });
    const html = response.data;

    // Se buscan los datos de los videos (por como se pasa el bloque de datos de Youtube)
    const jsonStart = 'var ytInitialData =';
    const jsonEnd = '};';
    const startIndex = html.indexOf(jsonStart) + jsonStart.length;
    const endIndex = html.indexOf(jsonEnd, startIndex) + 1;
    const jsonString = html.slice(startIndex, endIndex);

    // Se parsean los datos
    const data = JSON.parse(jsonString);
    const videos = [];

    const contents = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;

    contents.forEach((item) => {
      if (item.videoRenderer) {
        const title = item.videoRenderer.title.runs[0].text;
        const videoId = item.videoRenderer.videoId;
        const link = `https://www.youtube.com/watch?v=${videoId}`;

        videos.push({ title, link });
      }
    });

    // Se muestran los resultados
    console.log('Videos encontrados:');
    console.table(videos);

  } catch (error) {
    console.error('Error al realizar el web scraping:', error.message);
  }
}

// Para ejecutar la función periódicamente (cada 4 minutos)
const interval = 4 * 60 * 1000;
setInterval(scrapeYouTube, interval);

//Para ejecutar la función inmediatamente AL INICIO
scrapeYouTube();
