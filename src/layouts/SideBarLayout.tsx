import React, { FC, PropsWithChildren, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const menues = [
	{
		name: "Dasboard",
		link: "/"
	},
]

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
	const location = useLocation();
	const { updateAuth } = useContext(AuthContext);

	return (
		<div className={`flex  h-screen`}>
			<nav className={`bg-gray-800 text-white w-64 h-full flex flex-col transition-all duration-300`}>
					<div className="p-4 text-2xl font-bold">
						Dashboard
					</div>
					<ul className="flex-1">
						{
							menues.map((menu, index) => (
								<li
									className={`p-4 border-b border-gray-700 ${location.pathname === menu.link ? 'bg-gray-700' : ''}`}
									key={`dashboard-sidebar-item-${index}`}
								>
									<Link to={menu.link} className={`hover:text-gray-300`}>{menu.name}</Link>
								</li>
							))
						}
						{/* Add more menu items as needed */}
					</ul>
					<div className="p-4 cursor-pointer" onClick={() => {
						updateAuth(null)
					}}>
						Logout
					</div>
			</nav>

			<main className="flex-1 bg-gray-100 p-8">
				{children || <Outlet />}
			</main>
		</div>
	);
};

export default Sidebar;
