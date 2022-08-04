import './App.css';
import { Home } from './Component/Pages/Home';
import { Routes, Route } from 'react-router-dom'
import { About } from './Component/Pages/About';
import { Profile } from './Component/Pages/Profile/Profile';
import { Header } from './Component/Header';
import { Post } from './Component/Pages/Post';
import { MyAddress } from './Component/Pages/Profile/MyAddress';
import { Login } from './Component/Login';
import { AuthContext } from './AuthContext';
import { RequireLogin } from './Component/RequireLogin';

function App() {
  return (
    <AuthContext>
    <div className='App'>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/about' element={<RequireLogin><About/></RequireLogin>}>
        <Route path='me' element={<div>this is me</div>}/>
        <Route path='myblog' element={<div>this is my blog</div>}/>
      </Route>

      <Route path='/profile' element={<RequireLogin><Profile/></RequireLogin>}>
        <Route path='myorder' element={<div>My orders</div>}/>
        <Route path='myaddress' element={<MyAddress/>}/>
        <Route path='mywallet' element={<div>My wallet</div>}/>
      </Route>

      {/* parameters ---> dynamic routing */}
      <Route path='/:postId' element={<Post/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<div>Page not found</div>}/>
     </Routes>
    </div>
    </AuthContext>
  );
}

export default App;

// let buttonid = 2
// DataTransfer.filter((el) => {
//   return el.userId === buttonid
// })


// in v5 

{/* <Route path='/about' component={About}/> */}
{/* <About/> */}
{/* <Switch>
  <Route path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/profile' component={profile}/>
</Switch> */}

// /+profile