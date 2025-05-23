# Wikipedia Telegram Bot

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/santhoshraaj18/wikipedia-telegram-bot/graphs/commit-activity)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/santhoshraaj18/wikipedia-telegram-bot/blob/main/LICENSE)

This Node.js bot fetches a random article from Wikipedia, extracts a brief summary, and sends a formatted message with the title and a "Read more" link to a specified Telegram chat. It's a simple way to share interesting and unexpected knowledge with your Telegram group.

## Features

* **Fetches Random Wikipedia Articles:** Discovers new and diverse topics from Wikipedia's vast collection.
* **Extracts Article Summary:** Provides a concise overview of the article's content using the Wikipedia REST API.
* **Formatted Telegram Message:** Sends a message with the article title (bolded), the summary, and a Markdown link to the full Wikipedia page for easy access.
* **Environment Variable Configuration:** Uses `.env` file for easy management of sensitive information like the Telegram Bot Token and Chat ID.
* **Uses `axios`:** For making reliable HTTP requests to the Wikipedia and Telegram APIs.

## Getting Started

To run your own instance of this bot, follow these steps:

### Prerequisites

* **Node.js** (version 16 or higher recommended): You can download it from [https://nodejs.org/](https://nodejs.org/).
* **npm** (comes bundled with Node.js).
* **A Telegram Bot Token:** Obtain this by talking to [BotFather](https://t.me/BotFather) on Telegram.
* **Your Telegram Chat ID:** Find the ID of the Telegram group or channel where you want the bot to send messages.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/santhoshraaj18/wikipedia-telegram-bot.git](https://github.com/santhoshraaj18/wikipedia-telegram-bot.git)
    cd wikipedia-telegram-bot
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Configure the bot:**

    * Copy the `.env.example` file to `.env`:

        ```bash
        cp .env.example .env
        ```

    * Open the `.env` file and replace the placeholder values with your actual Telegram Bot Token and Chat ID:

        ```
        TELEGRAM_BOT_TOKEN='YOUR_TELEGRAM_BOT_TOKEN'
        TELEGRAM_CHAT_ID='YOUR_TELEGRAM_CHAT_ID'
        ```

4.  **Run the bot:**

    ```bash
    node index.js
    ```

    or

    ```bash
    npm start
    ```

    The bot will now run and send a random Wikipedia article to your specified Telegram chat.

## Usage

Once the bot is running, it will automatically fetch and send a random Wikipedia article to the configured Telegram chat. You can adjust the frequency or trigger the bot manually by interacting with the `index.js` file.

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **axios:** Promise-based HTTP client for making API requests.
* **Telegram Bot API:** The API used to interact with Telegram bots.
* **Wikipedia REST API:** The API used to fetch article summaries from Wikipedia.
* **dotenv:** For loading environment variables from the `.env` file.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Santhosh Raj](https://github.com/santhoshraaj18)
