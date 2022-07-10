import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './asset/Style/index.scss';
import App from './App';
// const container = document.getElementById("container");
const container = document.querySelector(".container");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)