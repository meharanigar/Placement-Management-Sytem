import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
const div = <div>
  <h1>Welcome to project</h1>
  <p>This is my first project</p>
</div>
createRoot(document.getElementById('root')).render(
//safety to the components by strict mode
<BrowserRouter>
<App/>
</BrowserRouter>

)
