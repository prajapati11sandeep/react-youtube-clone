import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Skeleton from "./Skeleton";

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState(null);
	const [loader, setLoader] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		setLoader(true);
		fetchFromAPI(`videos/?part=snippet,statistics&id=${id}`).then((data) => {
			setVideoDetail(data.items[0]);
		});
	}, [id]);

	useEffect(() => {
		if (videoDetail) {
			fetchFromAPI(
				`search/?part=snippet&${
					videoDetail?.snippet?.channelId
						? `channelId=${videoDetail?.snippet?.channelId}`
						: `q=${videoDetail?.snippet?.channelTitle}`
				}&safeSearch:moderate&maxResults=20`
			).then((data) => {
				setVideos(data.items);
				setLoader(false);
			});
		}
	}, [videoDetail]);

	if (!videoDetail?.snippet && !videos) return <Skeleton />;

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<div className="videoDetail__wrapper">
			<div className="videoDetail__video">
				<div className="videoDetail__player">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						width={"100%"}
						height={"100%"}
						playing={true}
						controls={true}
					/>
				</div>
				<div className="videoDetail__details">
					<div className="videoDetail__title">{title}</div>
					<div className="videoDetail__channel">
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
					<div className="videoDetail__data">
						<div className="videoDetail__views">
							{parseInt(viewCount).toLocaleString()}
						</div>
						<div className="videoDetail__like">
							{parseInt(likeCount).toLocaleString()}
						</div>
					</div>
				</div>
			</div>
			<div className="videoDetail__suggestion">
				<h2 className="feed__title">
					<span style={{ fontWeight: "bold" }}>Suggested </span> Videos
				</h2>
				<Videos videos={videos} loader={loader} />
			</div>
		</div>
	);
};

export default VideoDetail;
