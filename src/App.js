import './App.css';
import Login from'./Components/Login';
import Auth from './Components/Auth';
import { BrowserRouter as Router,  } from 'react-router-dom';
 
function App() {
  return (
    <>
        <Router>
          <Login></Login>
        </Router>
        <Router>

        <Auth></Auth>
        </Router>
    </>
  );
}

export default App;
