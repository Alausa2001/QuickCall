const axios = require('axios');



async function validatePhoneNo(phoneNo) {
    try {
        const options = {
            method: 'GET',
            url: 'https://phonenumbervalidate.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
            params: {
            number: phoneNo,
            country: 'NG',
            },
            headers: {
            'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'phonenumbervalidate.p.rapidapi.com'
            }
        };
        
        const response = await axios.request(options);
        if (response.data.isValidNumber === true) return response.data;
        return null;
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}
/*
(async () => {
    try {
        const result = await validatePhoneNo('+2347019302484');
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
*/
module.exports = validatePhoneNo;