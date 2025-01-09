import { FaCalendarWeek, FaHome, FaPaypal, FaRedRiver, FaShoppingCart } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex w-11/12 mx-auto">
            {/* Sidebar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <h3 className="text-3xl px-4 font-bold">BISTRO BOSS</h3>
                <p className="px-4 text-sm text-gray-700">Restaurant</p>
                <ul className="menu p-4 space-y-2">
                    <li>
                        <NavLink to="/dashboard/userHome" className="flex items-center gap-2">
                            <FaHome /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation" className="flex items-center gap-2">
                            <FaCalendarWeek /> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history" className="flex items-center gap-2">
                            <FaPaypal /> Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" className="flex items-center gap-2">
                            <FaShoppingCart /> My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review" className="flex items-center gap-2">
                            <FaRedRiver /> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking" className="flex items-center gap-2">
                            <FaBookAtlas /> My Booking
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    ); 
};

export default Dashboard;
