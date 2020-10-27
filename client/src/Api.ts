import { Post } from "./Post"

const apiUrl = "http://localhost:3001"
const fetchPosts = async (): Promise<Array<Post>> => {
	const response = await fetch(apiUrl + "/posts")

	if (!response.ok) {
		return Promise.reject(response.body)
	}
	return response.json()
}

const Api = {
	fetchPosts
}

export default Api
