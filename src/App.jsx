import './App.css'
import Button from '@mui/material/Button';
import { Box, Container, Stack} from '@mui/material';
import Dashboard from './components/Dashboard';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
      <header >
      <Typography variant="h2" >
        User Management
      </Typography>
      </header>
      <Dashboard />
      <footer>
        Created by Aviral Verma © 2025
      </footer>    
    </>
  )
}

export default App
