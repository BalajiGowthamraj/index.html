# FakeShop - E-commerce Demo

A React-based e-commerce application that demonstrates product listing and cart functionality using the Fake Store API.

## Features

- **Product Listing**: Displays products fetched from the Fake Store API with images, titles, prices, and descriptions.
- **Product Filtering**: Filter products by category and search term.
- **Product Details**: View detailed product information in a modal.
- **Cart Management**: Add and remove products from the cart.
- **Quantity Control**: Increase or decrease the quantity of items in the cart.
- **Dynamic Pricing**: Calculates subtotal, applies a 10% discount, and shows the final price.
- **Responsive Design**: Works well on mobile, tablet, and desktop devices.
- **Persistent Cart**: Cart data is saved in local storage to persist between sessions.

## Technical Stack

- **ReactJS**: Frontend library for building user interfaces
- **TypeScript**: For type-safe code
- **React Router**: For navigation between pages
- **Tailwind CSS**: For styling
- **Lucide React**: For icons
- **Fake Store API**: For product data
- **Vite**: Build tool and development server

## Project Structure

- **src/components**: Reusable UI components
- **src/context**: Context providers for state management
- **src/pages**: Main page components
- **src/types**: TypeScript type definitions
- **src/App.tsx**: Main application component with routing
- **src/main.tsx**: Entry point

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Screenshots

*(In a real project, you would add screenshots here showing the product listing and cart pages)*

## Future Improvements

- User authentication
- Checkout process
- Order history
- Product reviews
- Wishlist functionality
- Dark mode