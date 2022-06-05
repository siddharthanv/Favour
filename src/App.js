import { Routes, Route } from "react-router-dom";
import BecomeAnPartner from "./Pages/BecomeAnPartner/BecomeAnPartner";
import Hire from "./Pages/HirePage/Hire";
import HomePage from "./Pages/HomePage/HomePage";
import MyBookings from "./Pages/MyBookings/MyBookings";
import ServiceList from "./Pages/ServiceList/ServiceList";
import ServicePerson from "./Pages/ServicePersons/ServicePerson";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/SignupPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/service-person-list" element={<ServicePerson />} />
      <Route path="/service-list" element={<ServiceList />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/partner-bookings" element={<MyBookings />} />
      <Route path="/signup-partner" element={<BecomeAnPartner />} />
    </Routes>
  );
}

export default App;
