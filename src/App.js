import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import TabAdmin from './pages/TabAdmin';
import AddUser from './users/AddUser';
import Footer from './layout/Footer';
import UpdateUser from './users/UpdateUser';
import ViewUser from './users/ViewUser';
import TabProfessors from './pages/TabProfessors';
import AddProfessor from './professors/AddProfessor';
import Welcome from './pages/Welcome';
import ViewProfessor from './professors/ViewProfessor';
import UpdateProfessor from './professors/UpdateProfessor';


function App() {
  return (
    <div className="App">
  
        <Navbar/>

        <Routes>
                    
            <Route exact path="/home" element={<TabAdmin/>} />
            <Route exact path="/tabprofessors" element={<TabProfessors/>} />
            <Route exact path="/addprofessor" element={<AddProfessor/>} />
            <Route exact path="/viewprofessor/:id" element={<ViewProfessor/>} />
            <Route exact path="/updateprofessor/:id" element={<UpdateProfessor/>} />
            <Route exact path="/adduser" element={<AddUser/>} />
            <Route exact path="/updateuser/:id" element={<UpdateUser/>} />
            <Route exact path="/viewuser/:id" element={<ViewUser/>} /> 
        </Routes>

        <Footer/>
      
    </div>
  );
}

export default App;
