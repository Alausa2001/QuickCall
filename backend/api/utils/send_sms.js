const axios = require("axios");

// Not working yet - I am getting username is required error even though I
// added my username to the request body

async function send_sms(phoneNo) {
    try {
        const options = {
            method: 'POST',
            url: 'https://api.helliomessaging.com/v1/sms',
            body: {
                senderId: '64f86874c7265',
                msisdn: '2348160969769',
                message: 'Nodejs Sending SMS',
                username: 'alausa',
                password: 'Feranmi2001'
            }
        };
        const response = await axios.request(options)
        console.log(response.data)
        } catch(error) {
            console.error(error.message);
            throw new Error(error);
        }
    }

(async () => {
    try {
        const result = await send_sms('+2347019302484');
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();