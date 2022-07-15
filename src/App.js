import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import List from './pages/List/List';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
