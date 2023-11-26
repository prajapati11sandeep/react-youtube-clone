import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import Searchbar from "./Searchbar";

const Navbar = () => (
	<nav className="navigation">
		<div className="navigation__menu">
			<button className="navigation__button navigation__menu__button">
				<svg
					viewBox="0 0 24 24"
					preserveAspectRatio="xMidYMid meet"
					focusable="false"
				>
					<g>
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
					</g>
				</svg>
			</button>
			<Link to="/">
				<img src={logo} alt="youTube logo" height="30" />
			</Link>
		</div>

		<Searchbar />
	</nav>
);

export default Navbar;
