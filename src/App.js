import './App.css';
import { Home } from './Component/Pages/Home';
import { Routes, Route } from 'react-router-dom'
import { About } from './Component/Pages/About';
import { Profile } from './Component/Profile';
import { Header } from './Component/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/1' element={<div>first list item</div>}/>
      <Route path='*' element={<div>Page not found</div>}/>
     </Routes>
    </div>
  );
}

export default App;

// let buttonid = 2
// DataTransfer.filter((el) => {
//   return el.userId === buttonid
// })