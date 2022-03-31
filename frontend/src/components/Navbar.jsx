import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import firebase from '../config/firebase';

import { toast } from 'react-toastify';

function Navbar() {
	const userState = useAuthContext();

	const location = useLocation();
	const navigate = useNavigate();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	const handleLogout = () => {
		firebase.auth.signOut();
		toast.success('Bye Bye!');
		navigate('/');
	};

	return (
		<footer className="fixed left-0 bottom-0 right-0 h-20 bg-white text-[#8f8f8f] z-50 flex justify-center items-center">
			<nav className="w-full overflow-y-hidden">
				<ul className="m-0 p-0 flex justify-evenly items-center font-semibold">
					<li className="cursor-pointer" onClick={() => navigate('/about')}>
						<p
							className={
								pathMatchRoute('/about') ? 'text-[#2c2c2c] ' : 'text-[#8f8f8f]'
							}
						>
							About
						</p>
					</li>

					<li className="cursor-pointer" onClick={() => navigate('/')}>
						<p
							className={
								pathMatchRoute('/') ? 'text-[#2c2c2c] ' : 'text-[#8f8f8f]'
							}
						>
							Feedback
						</p>
					</li>

					{!userState ? (
						<li className="cursor-pointer" onClick={() => navigate('/sign-in')}>
							<p
								className={
									pathMatchRoute('/sign-in')
										? 'text-[#2c2c2c] '
										: 'text-[#8f8f8f]'
								}
							>
								Login
							</p>
						</li>
					) : (
						<li className="cursor-pointer" onClick={handleLogout}>
							<p className=" text-rose-400">Logout</p>
						</li>
					)}
				</ul>
			</nav>
		</footer>
	);
}

export default Navbar;