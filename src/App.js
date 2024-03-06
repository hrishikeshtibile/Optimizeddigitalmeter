import './App.css';
import { Display } from './Components/Display.js';
import { Login } from './Components/Login.js';
import { Signup } from './Components/Signup.js';

function App() {
  return (
    <div>
      <Signup />
      <Login />
      <Display />
    </div>
  );
}

export default App;
