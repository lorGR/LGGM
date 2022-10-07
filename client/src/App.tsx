import './App.css';
import GoogleLogin from './features/google-login/GoogleLogin';
import Register from './features/register/Register';

function App() {

  return (
    <div className="App">
      <GoogleLogin />
      <Register />
    </div>
  );
}

export default App;
