import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { getPresets } from "./presets";

const presets = getPresets();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App presets={presets} />
  </React.StrictMode>,
)
