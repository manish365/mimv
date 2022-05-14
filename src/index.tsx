import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/styles.css';

const container: any = document.querySelector('#main-content');
const root = createRoot(container);
root.render(<App />);
