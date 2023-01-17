import { Route, Routes } from 'react-router-dom';
import './App.css';
import First from './First';
import Long from './Long';
import SingIn from './SingIn';
import Main from './Main';
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<First/>}></Route>

        <Route path='/login' element={<Long/>}></Route>

        <Route path='/signin' element={<SingIn/>}></Route>
        <Route path='/main' element={<Main/>}></Route>

        
      </Routes>
      {/* <Route path= "login" element ={<Long/>}></Route> */}
      
    </div>
  );
}

export default App;
