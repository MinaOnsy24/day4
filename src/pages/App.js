import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './../routes/routes'
import { Provider } from 'react-redux';
import Store from '../store/Store';
import { useState } from 'react';
import { Counter } from '../context/counter';
import { Profile } from '../context/profile';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={Store}>
          <Counter.Provider value={{ counter, setCounter }}>
            {/* <Profile.Provider value={{ counter, setCounter }}> */}

              <Navbar />
              <Routes />

            {/* </Profile.Provider> */}
          </Counter.Provider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
