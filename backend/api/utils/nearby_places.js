const axios = require('axios');


async function getNearbyPlaces(keyword, location, radius = 15000) {
    try {
        const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
        if (keyword.toLowerCase() === 'fire') keyword = "Fire Emergency";

        const params = {
            key: process.env.MAP_KEY,
            keyword: keyword,
            location: location,
            radius: radius,
        };

        const response = await axios.get(baseUrl, { params });

        if (response.status === 200) {
            const data = response.data;

            if (data.results && data.results.length > 0) {
                const placesInfo = [];

                for (const place of data.results) {
                    const placeInfo = {
                        user_ratings_total: place.user_ratings_total,
                        vicinity: place.vicinity,
                        lat: place.geometry.location.lat,
                        lng: place.geometry.location.lng,
                        name: place.name,
                    };
                    placesInfo.push(placeInfo);
                }

                return placesInfo;
            } else {
                return null;
            }
        } else {
            throw new Error('Failed to fetch data from Google Places API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}




/*
getNearbyPlaces(apiKey, keyword, location, radius)
    .then((places) => {
        console.log('Nearby Places:', places);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
*/

module.exports = getNearbyPlaces;
