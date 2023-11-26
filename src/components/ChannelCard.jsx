import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetails }) => {
	return (
		<div className="feed__channel__info">
			<Link
				to={
					channelDetails?.id?.channelId
						? `/channel/${channelDetails?.id?.channelId}`
						: ""
				}
			>
				<div className="feed__channel__thumbnail">
					<img
						src={channelDetails?.snippet?.thumbnails?.high?.url}
						alt={channelDetails?.snippet?.title}
					/>
				</div>
				<div>
					<h3>{channelDetails?.snippet?.title}</h3>
					{channelDetails?.statistics?.subscriberCount && (
						<p>
							{parseInt(
								channelDetails?.statistics?.subscriberCount
							).toLocaleString("en-US")}{" "}
							Subscribers
						</p>
					)}
					<p>{channelDetails?.snippet?.description}</p>
				</div>
			</Link>
		</div>
	);
};

export default ChannelCard;
