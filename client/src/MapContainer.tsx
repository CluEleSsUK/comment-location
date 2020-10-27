import React from "react"
import { GoogleMap } from "react-google-maps"
import withScriptjs from "react-google-maps/lib/withScriptjs"
import withGoogleMap from "react-google-maps/lib/withGoogleMap"
import { Post, PostMarker } from "./Post"
import { googlify } from "./Location"

interface MapContainerProps {
	posts: Array<Post>
}

const australia = { lat: -34.397, lng: 150.644 }

const MapContainer = (props: MapContainerProps) => {
	const defaultCenter = props.posts.length === 0
		? australia
		: googlify(props.posts[0].location)

	return (
		<GoogleMap
			defaultZoom={8}
			defaultCenter={defaultCenter}
		>
			{props.posts.map(it => <PostMarker post={it} />)}
		</GoogleMap>
	)
}

export default withScriptjs(withGoogleMap(MapContainer))