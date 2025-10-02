import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, phone, company, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Skip reCAPTCHA verification in development mode
    const isDevelopment = import.meta.env.DEV;

    if (!isDevelopment && recaptchaToken !== 'dev-token') {
      // In production, verify reCAPTCHA token (if needed)
      // For now, we'll just check that a token was provided
      if (!recaptchaToken) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "reCAPTCHA verification failed",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: parseInt(import.meta.env.SMTP_PORT),
      secure: false, // false for port 587
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content
    const mailOptions = {
      from: `"BMG Contact Form" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.EMAIL_TO,
      subject: `New Contact Form Message from ${name}`,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007acc;">
                            ${message.replace(/\n/g, "<br>")}
                        </div>
                    </div>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                    <p style="font-size: 12px; color: #666;">
                        Sent from bmg.co.th contact form on ${new Date().toLocaleString("th-TH")}
                    </p>
                </div>
            `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
Message: ${message}

Sent from bmg.co.th contact form on ${new Date().toLocaleString("th-TH")}
            `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
