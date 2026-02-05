import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import nodemailer from "npm:nodemailer@6.9.7"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // 1. Handle CORS (Browser requests)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, name } = await req.json()

    // 2. Configure SMTP (Spaceship Settings)
    // Note: Spaceship usually uses port 465 (SSL) or 587 (TLS)
    const transporter = nodemailer.createTransport({
      host: Deno.env.get('SMTP_HOST'), // e.g., mail.spaceship.com
      port: parseInt(Deno.env.get('SMTP_PORT') || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: Deno.env.get('SMTP_USER'),
        pass: Deno.env.get('SMTP_PASS'),
      },
    });

    // 3. Send the Email
    const info = await transporter.sendMail({
      from: `"Ademasajida Health" <${Deno.env.get('SMTP_USER')}>`, // Sender address
      to: email, // List of receivers
      subject: "Welcome to the Ademasajida Health Network!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #1e3a8a;">Hello ${name},</h1>
          <p>Thank you for applying to join us! We have received your details successfully.</p>
          <p>Our team is reviewing your application and will contact you via phone or email within 48 hours.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Ademasajida Team</strong></p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);

    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500, // Return 500 for server errors
    })
  }
})