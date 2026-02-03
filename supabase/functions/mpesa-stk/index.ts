// File: supabase/functions/mpesa-stk/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// CORS Headers (Allows your React app to talk to this function)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // 1. Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 2. Get data from your React app
    const { phoneNumber, amount } = await req.json()

    // 3. Load Credentials from Supabase Secrets
    const consumerKey = Deno.env.get('MPESA_CONSUMER_KEY')
    const consumerSecret = Deno.env.get('MPESA_CONSUMER_SECRET')
    const passkey = Deno.env.get('MPESA_PASSKEY') // Use the sandbox passkey here
    
    // Sandbox URLs
    const authUrl = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    const stkUrl = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const shortCode = "174379"
    // 4. Get Access Token
    const auth = btoa(`${consumerKey}:${consumerSecret}`)
    const tokenResp = await fetch(authUrl, {
      headers: { "Authorization": `Basic ${auth}` }
    })
    const { access_token } = await tokenResp.json()

    if (!access_token) throw new Error("Failed to get Access Token")

    // 5. Generate Password & Timestamp
    const date = new Date()
    const timestamp = date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2) +
      ("0" + date.getHours()).slice(-2) +
      ("0" + date.getMinutes()).slice(-2) +
      ("0" + date.getSeconds()).slice(-2)

    const password = btoa(shortCode + passkey + timestamp)

    // 6. Send STK Push to Safaricom
    const stkResp = await fetch(stkUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "BusinessShortCode": shortCode,
        "Password": password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": Math.floor(amount), // Ensure amount is an integer
        "PartyA": phoneNumber, 
        "PartyB": shortCode,
        "PhoneNumber": phoneNumber, 
        "CallBackURL": "https://example.com/callback", // Replace with your real URL later
        "AccountReference": "ADEMASJIDA HEALTH NETWORK ORGANIZATION",
        "TransactionDesc": "Payment"
      })
    })

    const data = await stkResp.json()

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
})