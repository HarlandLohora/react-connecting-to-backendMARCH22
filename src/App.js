import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import './App.css';
import ApartmentsPage from './pages/ApartmentsPage';
import DetailPage from './pages/DetailPage';
import NewApartment from './pages/NewApartment';


// Ruta para mostrar la lista de departamentos https://ironbnb-m3.herokuapp.com/apartments
// Ruta para ver el detalle de un apartamento https://ironbnb-m3.herokuapp.com/apartments/627e6e3770cc1c0016998a48
// Ruta para crear un nuevo apartamento https://ironbnb-m3.herokuapp.com/apartments

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ApartmentsPage />} />
        <Route path="/new-apartment" element={<NewApartment />} />
        <Route path="/apartments/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
