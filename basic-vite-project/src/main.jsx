import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BGColorChanger from './components/BGColorChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BGColorChanger />
  </StrictMode>,
)
