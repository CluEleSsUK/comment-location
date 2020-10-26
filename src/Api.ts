import { samplePosts } from "./SamplePosts"
import { Post } from "./Post"

const fetchPosts = (): Promise<Array<Post>> => {
	return Promise.resolve(samplePosts)
}

const Api = {
	fetchPosts
}

export default Api
