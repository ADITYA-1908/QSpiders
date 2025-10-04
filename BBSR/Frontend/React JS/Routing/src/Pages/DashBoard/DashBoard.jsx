import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-[20%] min-h-screen bg-slate-800 text-white">
        <ul className="w-full h-full font-bold">
          <li className="text-center cursor-pointer py-4 hover:bg-slate-700">
            <NavLink to="create-users" className="block">
              Create users
            </NavLink>
          </li>
          <li className="text-center cursor-pointer py-4 hover:bg-slate-700">
            <NavLink to="all-users" className="block">
              All Users
            </NavLink>
          </li>
          <li className="text-center cursor-pointer py-4 hover:bg-slate-700">
            <NavLink to="edit-user" className="block">
              Edit User
            </NavLink>
          </li>
          <li className="text-center cursor-pointer py-4 hover:bg-slate-700">
            <NavLink to="profile" className="block">
              Profile
            </NavLink>
          </li>
          <li className="text-center cursor-pointer py-4 hover:bg-slate-700">
            <NavLink to="setting" className="block">
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-[80%] min-h-screen p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
