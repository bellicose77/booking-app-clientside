import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import List from './pages/List/List';
import Login from './pages/Login/Login';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
