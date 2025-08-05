import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1. Get the root element
const rootElement = document.getElementById('root');

// 2. Verify the element exists
if (!rootElement) throw new Error("Failed to find the root element");

// 3. Create a root and render
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);