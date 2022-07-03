import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Donor from './pages/Donor/Donor';
import Organization from './pages/Organization/Organization';
import AuthProvider from './contexts/AuthProvider';
import DonorRoute from './middlewares/DonorRoute'
import OrganizationRoute from './middlewares/OrganizationRoute'
import DetailsActiveEvent from './pages/DetailsActiveEvent/DetailsActiveEvent'
import DetailsActiveEnrollEvent from './pages/DetailsActiveEnrollEvent/DetailsActiveEnrollEvent'
import DonorDashboard from './pages/DonorDashboard/DonorDashboard';
import AllEvents from './pages/AllEvents/AllEvents';
import OrganizationDashboard from './pages/OrganizationDashboard/OrganizationDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            {/* Donor */}
            <Route path="/donor" element={<Donor />}>
            </Route>
            <Route path="/event/:id" element={<DetailsActiveEvent />}></Route>
            <Route path="/enrollevent/:id" element={<DetailsActiveEnrollEvent />}></Route>
            <Route path="/donordashboard" element={<DonorDashboard />}></Route>
            {/* organization */}
            <Route path="/" element={<Organization />}>
              <Route exact path="/organization" element={<OrganizationDashboard />}>
              </Route>
              <Route path={`organization/events`} element={<AllEvents />}>
              </Route>
            </Route>
            {/* autentication */}
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            {/* <Route path="/register" element={<Register />}>
          </Route> */}
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
