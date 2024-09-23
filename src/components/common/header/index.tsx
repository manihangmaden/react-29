import { Navbar } from "flowbite-react";
import logo from "../../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
export const HomeHeader = () => {
   return (<>
      <Navbar fluid rounded className="bg-slate-100">
         <Navbar.Brand href="https://flowbite-react.com">
            <img src={logo} className="mr-3 h-6 sm:h-16" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Radio Dharan 88.8Mhz</span>
         </Navbar.Brand>
         <div className="flex md:order-2">
            <Navbar.Collapse className="me-5">
               <NavLink to="/register" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
                  Register
               </NavLink>
               <NavLink to="/login" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
                  Login
               </NavLink>
            </Navbar.Collapse>
            {/* <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                     <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                  }
               >
                  <Dropdown.Header>
                     <span className="block text-sm">Bonnie Green</span>
                     <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
               </Dropdown> */}
            <Navbar.Toggle />
         </div>
         <Navbar.Collapse>
            <NavLink to="/" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
               Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
               About
            </NavLink>
            <NavLink to="/categories" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
               Categories
            </NavLink>
            <NavLink to="/product" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
               All products
            </NavLink>
            <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => isActive ? "md:text-cyan-600" : "md:text-gray-700" + `block py-2 px-3 text-gray-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-gray-500`}>
               Contacts
            </NavLink>

         </Navbar.Collapse>
      </Navbar>
   </>)
}