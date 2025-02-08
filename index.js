const axios = require("axios");

const BASE_URL = "https://api.postalpincode.in/pincode/";

/**
 * Fetch details for a given Indian PIN code.
 * @param {string} pincode - A 6-digit Indian PIN code.
 * @returns {Promise<Object>} - Consistent response with success, message, count, and data.
 */
async function getPinCodeDetails(pincode) {
    if (!/^\d{6}$/.test(pincode)) {
        return {
            success: false,
            message: "Invalid PIN code! Please enter a 6-digit number.",
            count: 0,
            data: []
        };
    }

    try {
        const response = await axios.get(`${BASE_URL}/${pincode}`);
        const data = response.data;

        if (data[0].Status === "Success") {
            return {
                success: true,
                message: "PIN code details fetched successfully.",
                count: data[0].PostOffice.length,
                data: data[0].PostOffice
            };
        } else {
            return {
                success: false,
                message: "No details found for the given PIN code.",
                count: 0,
                data: []
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetch PIN code details. Please try again.",
            count: 0,
            data: []
        };
    }
}

module.exports = { getPinCodeDetails };
