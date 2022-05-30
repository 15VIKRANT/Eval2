import { Routes, Route, Link } from "react-router-dom";
import RegisterPageTwo from "./RegisterPageTwo";
import Contact from "./Contact";
import RegisterPageOne from "./RegisterPageOne";
import Login from "./Login";
import Navbar from "./Navbar";
import PrivateRoute from "./PrivateRoute";


function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register/one" element={<RegisterPageOne />} />
        <Route path="/register/two" element={<RegisterPageTwo />} />
        <Route path="/contact" element={<Contact />} />
       
      
      </Routes>
    </>
  );
}

export default AllRoutes;

// 1. Create Routes
// 2. Create navbar
// 3. ensure Browser Router is imported
// 4. create home, about, contact
// 5. creaet separate components for it
// 6. if possible start on the users page => where you fetch user data
// 15minutes
