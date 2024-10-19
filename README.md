## Pricing Page - Next.js Project

This is a dynamic and responsive pricing page built with Next.js and Tailwind CSS, designed to provide a seamless experience across different screen sizes. The page features a clean, minimalistic design and includes customizable components, such as custom icons and interactive pricing toggles.

Live Demo: View it ([Live](https://bitscale-assignment-xi.vercel.app/))

## Getting Started

Local Development
To run the project locally, follow these steps:

Clone the repository:
```bash
git clone https://github.com/mohitisimmortal/bitscale-assignment.git
cd bitscale-assignment
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project will automatically reload upon detecting file changes, ensuring a smooth development experience.


## Features
Dynamic Pricing: Toggle between Monthly and Annual pricing plans.

Responsive Design: Adapts to various screen sizes, ensuring a consistent experience.

Customizable Components: Includes a custom-built tick icon and a gradient background for specific pricing plans.

Well-Commented Code: Each section of the code is thoroughly documented to aid understanding and maintainability.

## Main Components
Main Pricing Page (page.tsx):
The main component of the project is located in app/page.tsx. It includes:

- The structure of the pricing page, including the pricing plans (Trial, Growth, Booster, Enterprise).

- A toggle to switch between Monthly and Annual plans using React’s state management.

- Each pricing card includes custom-styled buttons, dynamic badges, and well-organized features.

Custom Tick Icon Component:
Located at app/customComponents/CustomTickIcon.tsx, this component renders a customizable SVG tick icon with dynamic colors for the background and tick stroke.

## Code Best Practices
The code follows best practices for maintainability and scalability:

Modular Structure: Components are structured for easy maintenance and reusability.

Semantic HTML: Proper HTML elements are used to ensure accessibility and better SEO.

Well-Commented: Each component and significant code block includes descriptive comments, making it easier to understand the logic and functionality.

Responsive Design: The design is built with a mobile-first approach, ensuring consistent behavior across various screen sizes.
