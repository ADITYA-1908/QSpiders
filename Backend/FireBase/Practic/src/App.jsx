import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import CreateUser from "./Pages/CreateUser";
import Dashboard from "./Pages/Dashboard";
import ShowUsers from "./Pages/ShowUsers";
import UpdateUser from "./Pages/UpdateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
        <Route path="/show-data" element={<ShowUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
