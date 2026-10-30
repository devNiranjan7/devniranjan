# Dev Niranjan - Portfolio

A modern, responsive developer portfolio built to showcase my skills, projects, and experience as a Full Stack Developer.

## Live Demo

[View Portfolio](https://devniranjan-gamma.vercel.app)

## Features

- Responsive design for all devices
- Smooth animations with Framer Motion
- Modern UI with dark theme
- Interactive skills section
- Project showcase with live demos and GitHub links
- Resume access
- Working contact form powered by web3forms
- SEO optimized

## Tech Stack

- Next.js
- React.js
- Tailwind CSS
- Framer Motion
- JavaScript
- web3forms
- Vercel

## Contact Form Setup

This portfolio uses web3forms for the contact form. To make it work locally or in production:

1. Create an account at [web3forms.com](https://web3forms.com)
2. Copy your access key from the dashboard
3. Replace the placeholder in `components/sections/Contact.jsx`:

```js
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
```

with your actual key:

```js
const WEB3FORMS_ACCESS_KEY = "your-real-access-key";
```

For a cleaner setup, you can also store it in `.env.local` and read it from `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

## Contact

Dev Niranjan

- [GitHub](https://github.com/devNiranjan7)
- [LinkedIn](https://www.linkedin.com/in/dev-niranjan-5810a1337/)
- [Email](mailto:devniranjan0111@gmail.com)
