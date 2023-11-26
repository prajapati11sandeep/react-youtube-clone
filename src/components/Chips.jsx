import React from "react";
import { chips } from "../utils/constants";

const Chips = ({ selectedCategory, setSelectedCategory }) => (
	<div className="chips">
		{chips.map((chip) => {
			return (
				<div
					className={`chips__item ${
						chip.name === selectedCategory ? "chips__item--selected" : ""
					}`}
					key={chip.name}
					onClick={() => setSelectedCategory(chip.name)}
				>
					{chip.name}
				</div>
			);
		})}
	</div>
);

export default Chips;
