import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();
	const handelSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};

	return (
		<form className="navigation__search" onSubmit={handelSubmit}>
			<input
				type="search"
				placeholder="Search"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			<button className="navigation__button navigation__search__icon">
				<svg viewBox="0 0 24 24" className="navigation__icon">
					<g>
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
					</g>
				</svg>
			</button>
		</form>
	);
};

export default Searchbar;
