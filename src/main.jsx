import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoanForm from './LoanForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoanForm/>
  </StrictMode>,
)
