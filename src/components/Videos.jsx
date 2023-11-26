import React from "react";
import { VideoCard, ChannelCard } from "./";
import Skeleton from "./Skeleton";

const Videos = ({ videos, loader }) => {
	return (
		<>
			{loader ? (
				<Skeleton />
			) : (
				videos.map((video, index) => (
					<div className="feed__item" key={index}>
						{video?.id?.videoId && <VideoCard video={video} />}
						{video?.id?.channelId && <ChannelCard channelDetails={video} />}
					</div>
				))
			)}
		</>
	);
};

export default Videos;
