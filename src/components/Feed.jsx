import React, { useState, useEffect } from "react";
import { Chips, Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		fetchFromAPI(
			`search/?part=snippet&q=${selectedCategory}&maxResults=20`
		).then((data) => {
			setVideos(data.items);
			setLoader(false);
		});
	}, [selectedCategory]);

	return (
		<>
			<Chips
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<Sidebar
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div className="feed">
				<h2 className="feed__title">
					<span style={{ fontWeight: "bold" }}>{selectedCategory}</span> Videos
				</h2>

				<div className="feed__wrapper">
					<Videos videos={videos} loader={loader} />
				</div>
			</div>
		</>
	);
};

export default Feed;
