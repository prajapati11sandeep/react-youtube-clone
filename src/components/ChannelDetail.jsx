import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`channels/?part=snippet&id=${id}&maxResults=1`).then(
			(data) => {
				setChannelDetail(data?.items[0]);
			}
		);
		fetchFromAPI(
			`search/?part=snippet&channelId=${id}&order=date&maxResults=20`
		).then((data) => {
			setVideos(data?.items);
		});
	}, [id]);

	return (
		<>
			<div className="feed channel__feed">
				<div className="feed__channel__header">
					{channelDetail && <ChannelCard channelDetails={channelDetail} />}
				</div>
				<div className="feed__channel__wrapper">
					<div className="feed__wrapper">
						{videos && <Videos videos={videos} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default ChannelDetail;
