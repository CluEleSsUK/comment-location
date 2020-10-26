import React, { useState } from "react"
import { InfoWindow, Marker } from "react-google-maps"
import { googlify, Location } from "./Location"

export interface Post {
	location: Location
	author: string
	comment: string
	timestamp: number
}

type PostOverviewProps = {
	post: Post
}

const PostOverview = (props: PostOverviewProps) =>
	<div>
		<div>
			{props.post.comment}
		</div>

		<div>
			by {props.post.author} at {props.post.timestamp}
		</div>
	</div>

type PostMarkerProps = {
	post: Post
}

const PostMarker = (props: PostMarkerProps) => {
	const [showInfo, setShowInfo] = useState(false)
	const toggleInfo = () => setShowInfo(!showInfo)

	return (<Marker
			onClick={toggleInfo}
			position={googlify(props.post.location)}
		>
			{
				showInfo && <InfoWindow onCloseClick={() => setShowInfo(false)}>
          <PostOverview post={props.post} />
        </InfoWindow>
			}
		</Marker>
	)
}

export { PostOverview, PostMarker }