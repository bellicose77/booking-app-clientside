import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
