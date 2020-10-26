import React, { useEffect, useState } from "react"
import MapContainer from "./MapContainer"
import Api from "./Api"
import { Post } from "./Post"
import "./App.css"

const apiKey = "API_KEY_GOES_HERE"
const googleProps = {
	googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
	loadingElement: <div style={{ height: `100%` }}>Loading...</div>,
	containerElement: <div style={{ height: `400px` }} />,
	mapElement: <div style={{ height: `100%` }} />
}

const App = () => {
	const [posts, setPosts] = useState<Array<Post>>([])

	useEffect(() => {
		Api.fetchPosts().then(setPosts)
	}, [])

	return (
		<MapContainer
			{...googleProps}
			posts={posts}
		/>
	)
}

export default App;
