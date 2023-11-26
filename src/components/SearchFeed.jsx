import React, { useState, useEffect } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);
	const [loader, setLoader] = useState(false);
	const { searchTerm } = useParams();

	useEffect(() => {
		setLoader(true);
		fetchFromAPI(`search/?part=snippet&q=${searchTerm}&maxResults=21`).then(
			(data) => {
				setVideos(data.items);
				setLoader(false);
			}
		);
	}, [searchTerm]);

	return (
		<>
			<div className="feed search__feed">
				<h2 className="feed__title">
					Search result for{" "}
					<span style={{ fontWeight: "bold" }}>{searchTerm}</span> Videos
				</h2>

				<div className="feed__wrapper">
					<Videos videos={videos} loader={loader} />
				</div>
			</div>
		</>
	);
};

export default SearchFeed;
