# 📌 BharatPin

A simple and lightweight Node.js package to fetch details of Indian PIN codes. Get information like post office name, district, state, and more using this package.

## 🚀 Installation

You can install BharatPin via npm:

```sh
npm install bharatpin
```


## 📖 Usage
Import the package in your Node.js application and fetch PIN code details easily.

Example:
```sh
const { getPinCodeDetails } = require("bharatpin");

async function fetchDetails() {
    const response = await getPinCodeDetails("110001"); // Replace with any valid Indian PIN code
    console.log(response);
}

fetchDetails();
```

### `getPinCodeDetails(pincode)`

Fetches details for a given Indian PIN code.

#### Parameters:

| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| `pincode` | String | A 6-digit Indian PIN code      |

#### Returns:

A `Promise` resolving to an object containing:

- `success` (boolean): `true` if data is found, `false` otherwise.
- `message` (string): Status message.
- `count` (number): Number of post offices found.
- `data` (array): List of post office details.

## ✅ Success Response
```sh
{
    "success": true,
    "message": "PIN code details fetched successfully.",
    "count": 1,
    "data": [
        {
            "Name": "Bengali Market",
            "Description": null,
            "BranchType": "Sub Post Office",
            "DeliveryStatus": "Non-Delivery",
            "Circle": "Delhi",
            "District": "Central Delhi",
            "Division": "New Delhi Central",
            "Region": "Delhi",
            "Block": "New Delhi",
            "State": "Delhi",
            "Country": "India",
            "Pincode": "110001"
        }
    ]
}
```

## ❌ Failure Responses
Invalid PIN Code (Not 6 Digits)
```sh
{
    "success": false,
    "message": "Invalid PIN code! Please enter a 6-digit number.",
    "count": 0,
    "data": []
}
```
No Data Found for the Given PIN Code
```sh
{
    "success": false,
    "message": "No details found for the given PIN code.",
    "count": 0,
    "data": []
}
```

API Request Failure (Network Error, API Downtime)
```sh
{
    "success": false,
    "message": "Failed to fetch PIN code details. Please try again.",
    "count": 0,
    "data": []
}
```
