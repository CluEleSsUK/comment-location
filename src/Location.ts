export interface Location {
	lat: number,
	long: number
}

export function googlify(location: Location) {
	return { lat: location.lat, lng: location.long }
}