import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Payment from './components/payment';

function App() {
  return (
    
    <div className="App">
      {/* <Header /> */}
      <Router>
           <Routes>
                 <Route exact path='/' element={<RegistrationForm/>}></Route>
                 <Route exact path='/payment' element={< Payment />}></Route>
          </Routes>
       </Router>
    </div>
  );
}

export default App;