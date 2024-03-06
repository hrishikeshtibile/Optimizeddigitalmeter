import './App.css';
import { Display } from './Components/Display.js';
import { Login } from './Components/Login.js';
import { Navbar } from './Components/Navbar.js';
import { Signup } from './Components/Signup.js';

function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <Login />
      <Display />
    </div>
  );
}

export default App;
