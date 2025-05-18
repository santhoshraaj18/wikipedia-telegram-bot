const axios = require('axios');

// Replace with your Telegram bot token
const TELEGRAM_BOT_TOKEN = '7219796660:AAEwL-3eSwqMhSS-FGpwF6aUT4CINac8kEo';
// Replace with your Telegram chat ID
const TELEGRAM_CHAT_ID = '-4278792003';

// Function to fetch a random Wikipedia article
async function fetchRandomWikipediaArticle() {
  try {
    const response = await axios.get(
      'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1'
    );

    const article = response.data.query.random[0];
    const title = article.title;

    // Fetch the summary of the article
    const summaryResponse = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );

    const summary = summaryResponse.data.extract;
    const url = summaryResponse.data.content_urls.desktop.page;

    return { title, summary, url };
  } catch (error) {
    console.error('Error fetching Wikipedia article:', error);
    return null;
  }
}

// Function to send a message to a Telegram group
async function sendMessageToTelegram(message) {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    });
    console.log('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
}

// Main function to execute the script
(async () => {
  const article = await fetchRandomWikipediaArticle();

  if (article) {
    const message = `*${article.title}*\n\n${article.summary}\n\n[Read more](${article.url})`;
    await sendMessageToTelegram(message);
  }
})();
