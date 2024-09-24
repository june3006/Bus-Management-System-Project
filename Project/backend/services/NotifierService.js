import nodemailer from "nodemailer";
import { email } from "../config.js";

const transporter = nodemailer.createTransport({
  service: email.service,
  auth: {
    user: email.auth.user,
    pass: email.auth.pass,
  },
});

/**
 * Sends a booking confirmation email to a passenger.
 * This function logs the attempt to send an email and includes
 * actual email sending logic using Nodemailer.
 *
 * @param {string} passengerName - The name of the passenger to whom the email will be sent.
 * @param {string} passengerEmail - The email of the passenger to whom the email will be sent.
 * @param {object} booking - The booking details that will be included in the email.
 */
export async function sendBookingConfirmationEmail(
  passengerName,
  passengerEmail,
  booking
) {
  try {
    let info = await transporter.sendMail({
      from: email.auth.user,
      to: passengerEmail,
      subject: "Booking Confirmation",
      text: `Hi ${passengerName}, your booking for ${booking.details} is confirmed.`,
      html: `<strong>Hi ${passengerName}</strong>, <br>Your booking for <em>${booking.details}</em> is confirmed.`,
    });
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
}
