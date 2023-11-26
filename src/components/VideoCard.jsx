// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl, demoChannelUrl } from "../utils/constants";
// import { fetchFromAPI } from "./../utils/fetchFromAPI";

const VideoCard = ({ video }) => {
	// const [channelDetail, setChannelDetail] = useState(null);
	// const id = video.snippet.channelId;

	// useEffect(() => {
	// 	fetchFromAPI(`channels/?part=snippet&id=${id}&maxResults=1`).then(
	// 		(data) => {
	// 			setChannelDetail(data?.items[0]);
	// 		}
	// 	);
	// }, [id]);

	return (
		<>
			<Link
				to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}
			>
				<div className="feed__item__thumbnail">
					<img
						src={video?.snippet?.thumbnails?.medium?.url}
						alt={video?.snippet?.title}
					/>
				</div>
			</Link>
			<div className="feed__item__info">
				{/* <Link
					to={
						video?.snippet?.channelId
							? `/channel/${video?.snippet?.channelId}`
							: demoChannelUrl
					}
				>
					<div className="">
						<img
							className="feed__item__info__avatar"
							alt={channelDetail?.snippet?.title}
							src={channelDetail?.snippet?.thumbnails?.high?.url}
						/>
					</div>
				</Link> */}
				<div>
					<h3>
						<Link
							to={
								video?.id?.videoId
									? `/video/${video?.id?.videoId}`
									: demoVideoUrl
							}
						>
							{video?.snippet?.title}
						</Link>
					</h3>
					<Link
						to={
							video?.snippet?.channelId
								? `/channel/${video?.snippet?.channelId}`
								: demoChannelUrl
						}
					>
						{video?.snippet?.channelTitle}
					</Link>
				</div>
			</div>
		</>
	);
};

export default VideoCard;
