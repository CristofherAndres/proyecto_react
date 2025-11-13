import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)
