
import emailjs from '@emailjs/browser';

// Your EmailJS Credentials
const SERVICE_ID = 'service_erftpys';
const TEMPLATE_ID = 'template_uzirmh6';
const PUBLIC_KEY = 'czjhCah9-cMUqjPR-';

// Initialize EmailJS with your Public Key
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Sends the contact form data to your email via EmailJS.
 */
export const sendEmail = async (data: ContactFormData) => {
  // These keys must match the placeholders in your EmailJS template (e.g., {{from_name}})
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email, // This allows you to reply directly to the sender
    subject: data.subject,
    message: data.message,
    to_name: 'Raj Shekhar',
  };

  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    return result;
  } catch (error) {
    console.error('EmailJS Error Detail:', error);
    throw error;
  }
};
