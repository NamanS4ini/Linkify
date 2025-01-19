# Linkify

**Linkify** is a free and open-source URL shortener that makes sharing links simple and efficient. With Linkify, you can shorten long URLs, making them more manageable and user-friendly. Whether you're sharing links on social media, emails, or anywhere else, Linkify has you covered.

## Features

- Shorten long URLs into concise, shareable links.
- Easy-to-use interface for creating and managing links.
- Free and open-source, welcoming contributions from the community.
- Built with Next.js for modern, high-performance web applications.

## Installation

To get started with Linkify, clone the repository and install the dependencies:

```bash
git clone https://github.com/NamanS4ini/Linkify.git
cd linkify
npm install
```

## Environment Variables

To run Linkify, you need to set up the following environment variables in a `.env.local` file at the root of your project:

```env
MONGODB_URI = <your-mongodb-connection-string>
NEXT_PUBLIC_PAGE_URL = <your-application-base-url>
```

- `MONGODB_URI`: The connection string for your MongoDB database.
- `NEXT_PUBLIC_PAGE_URL`: The base URL of your Linkify application (e.g., `http://localhost:3000`).

## Usage

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` by default.

For production builds:

```bash
npm run build
npm start
```

## Contributing

Contributions are welcome! If you'd like to contribute to Linkify, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## Contact

For questions, feedback, or collaboration, feel free to open an issue on the repository.

---

Happy coding with Linkify! 🚀
