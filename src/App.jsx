import './App.css';
import ReactDOM from 'react-dom/client'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ironhackersImg from "./assets/ironhackers.avif"
import ApartmentDetails from './components/ApartmentDetails';
import ApartmentsList from "./components/ApartmentsList"
import CreateApartment from "./components/CreateApartment"
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <nav className="navbar">
    <NavLink to="/">Home</NavLink> |
    <NavLink to="/apartments">Apartments</NavLink> |
        <NavLink to="/apartment/create">Create</NavLink> |
      </nav>
      <div className="App">

        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/apartments/:apartmentId' element={<ApartmentDetails />} />
          <Route path='/apartments' element={<ApartmentsList />} />
          <Route path='/apartment/create' element={<CreateApartment />} />
          <Route path='/NavBar' element={<p> This is a NavBar page </p>} />

          {/* <Route path='/apartment/:apartmentId' element={<ApartmentDetails callbackToUpdateApartment={getAparmentFromApi} />} /> */}
        </Routes>

      </div>
    </>
  );
}



export default App;
