import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import User from './Pages/User';
import UserPost from './Pages/UserPost';

function App() {
  return (
  <Routes>
  <Route path='/' element={<Home/>}> </Route>
  <Route path='/user' element={<User/>}> </Route>
  <Route path='/UsersPost/:id' element={<UserPost/>}> </Route>

  </Routes>
  );
}

export default App;
