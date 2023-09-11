const axios = require('axios'); 



async function geocode(lat, lng) {
    const url =  `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${process.env.OPENCAGE_KEY}`;

    const options = {
        method: 'GET',
        url,
    }

    try {
        const response = await axios(options);
        const data = response.data;
        const locationDetails = { 
            country: '', state: '', LGA: '', town: '' 
        }

        if (data.results.length > 0) {
            const result = data.results[0];
            const components = result.components;
    
            
                const state = components['state'];
                locationDetails.state = state;
                locationDetails.country =  components['country'];
                
                
                if (components['county']) {
                    const lga = components['county'];
                    locationDetails.LGA = lga
                    locationDetails.town = components['town'];

                } else {
                    return { status: 'failed', message: 'LGA not found' } ;
                }
        } else {
            return {
                status: 'failed', message: 'Invalid location, supports registered addresses in nigeria only'
            };
        }
        locationDetails.status = 'success';
        return locationDetails;
    } catch(err) {
        console.log(err);
        throw new Error(err.message);
    }
}

/*
(async () => {
    try {
    const response = await geocode(6.9032507,  3.8356233);
    console.log(response)
    } catch(err) {
        console.log(err.message);
    }
})();
*/
module.exports = geocode;
