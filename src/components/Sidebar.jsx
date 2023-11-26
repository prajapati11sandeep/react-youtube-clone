import React from "react";
import { categories, Channels } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
	<div className="sidebar">
		<section className="sidebar__section">
			{categories.map((category) => {
				return (
					<button
						className={`sidebar__section__link ${
							category.name === selectedCategory
								? "sidebar__section__link--selected"
								: ""
						}`}
						key={category.name}
						onClick={() => setSelectedCategory(category.name)}
					>
						<span className="sidebar__icon material-symbols-outlined">
							{category.icon}
						</span>
						<span>{category.name}</span>
					</button>
				);
			})}
		</section>
		<section className="sidebar__section">
			<h3>Channels</h3>
			{Channels.map((channel) => {
				return (
					<button
						className={`sidebar__section__link ${
							channel.name === selectedCategory
								? "sidebar__section__link--selected"
								: ""
						}`}
						key={channel.name}
						onClick={() => setSelectedCategory(channel.name)}
					>
						<span className="sidebar__icon material-symbols-outlined">
							{channel.icon}
						</span>
						<span>{channel.name}</span>
					</button>
				);
			})}
		</section>
	</div>
);

export default Sidebar;
