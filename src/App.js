
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OpenDashboard from './components/OpenDashboard';


import {

  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Login from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Content from './components/Admin/Content';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>

          <Route path='/' element={<OpenDashboard />}></Route>
          <Route path='/home' element={<Home />}>

          </Route>
        </Routes>
       
          <Routes>
          <Route path="/admin" element={<Login />} />
          <Route path="/adminDash" element={<AdminDashboard />}/>
    
          {/* <Routes> */}
                        <Route path="/users" element={<Users />} />
                        <Route path="/content" element={<Content />} />
                    {/* </Routes> */}
          </Routes>

        



      </div>
    </Router>
  );
}

export default App;
