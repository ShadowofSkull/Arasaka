# Arasaka

## AI-Powered Electronics Marketplace

![Arasaka Banner](public/hori-logo.svg)

Arasaka is a modern e-commerce platform that leverages Google's Gemini AI to provide personalized computer hardware recommendations. This application showcases how AI can enhance the shopping experience by understanding user needs and suggesting the most appropriate products.

## Features

- **AI-Powered Product Recommendations**: Use natural language to describe what you're looking for, and get tailored product suggestions
- **Modern UI/UX**: Clean, Apple-inspired interface with translucent elements and responsive design
- **Comprehensive Product Database**: Wide range of components from top manufacturers like Intel, AMD, NVIDIA, and more
- **Dark/Light Mode**: Fully responsive design that works across all devices with theme support

## Technologies Used

- **Frontend**: Next.js 15, React, Tailwind CSS
- **AI Integration**: Google Gemini API
- **Data Management**: JSON product database
- **Authentication**: [Coming Soon]
- **Deployment**: [Coming Soon]

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/arasaka.git
   cd arasaka
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
arasaka/
├── public/          # Static assets
├── src/
│   ├── app/         # App router pages
│   ├── components/  # React components
│   ├── utils/       # Utility functions
│   └── api/         # API routes
├── .env.local       # Environment variables
└── README.md        # Project documentation
```

## Future Enhancements

- Implement user authentication
- Add shopping cart functionality
- Integrate real-time inventory management
- Develop personalized user profiles and recommendation history
- Expand product categories

## License

This project is licensed under the GNU AGPLv3 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google for providing the Gemini AI API
- Next.js team for the amazing framework
- All the open-source packages that made this project possible

---

*Arasaka - The future of AI-enhanced shopping experiences*