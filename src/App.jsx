import './App.css'
import Button from '@mui/material/Button';
import { Box, Container, Stack} from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <header >
        User Management
      </header>
      <Dashboard />
      <footer>
        Created by Aviral Verma © 2025
      </footer>    
    </>
  )
}

export default App
