import axios from 'axios';
import { Buffer } from 'buffer';

// --- YOUR CREDENTIALS ---
// (Keep these safe! Revoke the old ones if you posted them publicly)
const consumerKey = "0s8ma1CGH9tTKlm7Sb3GfgAToAJ0KiQAwF4eP3Jy18mkpvKb"; 
const consumerSecret = "Wm9AXtZwhAGa10vjn5YBXuDAC6A1QZQnXhUdGgEAcopVmimlq2CnGgcVZx3DlYSu";

// --- SAFARICOM SANDBOX CONSTANTS ---
const shortCode = "174379"; // Standard Sandbox Paybill
const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"; 

async function triggerStkPush() {
    try {
        // 1. GET ACCESS TOKEN (We repeat this here to make the flow complete)
        const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
        const tokenResponse = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
            headers: { "Authorization": `Basic ${auth}` }
        });
        const accessToken = tokenResponse.data.access_token;
        console.log("1. 🎟️ Access Token generated.");

        // 2. GENERATE TIMESTAMP (Format: YYYYMMDDHHmmss)
        const date = new Date();
        const timestamp = date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2);

        // 3. GENERATE PASSWORD (Base64 of ShortCode + Passkey + Timestamp)
        const password = Buffer.from(shortCode + passkey + timestamp).toString('base64');

        // 4. SEND STK PUSH REQUEST
        // Note: In Sandbox, "PartyA" and "PhoneNumber" are usually the same (the customer's phone)
        // "PartyB" is the Business Shortcode (174379)
        const stkUrl = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
        
        const payload = {
            "BusinessShortCode": shortCode,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": "1",           // 1 KES for testing
            "PartyA": "254724094850", // <--- REPLACE WITH YOUR PHONE NUMBER
            "PartyB": shortCode,
            "PhoneNumber": "254724094850", // <--- REPLACE WITH YOUR PHONE NUMBER
            "CallBackURL": "https://mydomain.com/path", // We will discuss this next!
            "AccountReference": "EnkajTest",
            "TransactionDesc": "Testing payment"
        };

        const response = await axios.post(stkUrl, payload, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        console.log("2. 🚀 STK Push Sent! Check your phone.");
        console.log("Response:", response.data);

    } catch (error) {
        console.error("❌ Error:", error.response ? error.response.data : error.message);
    }
}
triggerStkPush();