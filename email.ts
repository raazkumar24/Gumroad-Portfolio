
import emailjs from '@emailjs/browser';

// Constants for your EmailJS configuration
const SERVICE_ID = 'service_erftpys';
const TEMPLATE_ID = 'template_oivfgeq';
const PUBLIC_KEY = 'czjhCah9-cMUqjPR-';

export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Sends an email using the provided form data via EmailJS.
 * @param params The data collected from the contact form.
 * @returns Promise that resolves if successful.
 */
export const sendContactEmail = async (params: EmailParams) => {
  try {
    const templateParams = {
      from_name: params.name,
      from_email: params.email, // Often used for reply_to in templates
      subject: params.subject,
      message: params.message,
      to_name: 'Raj Shekhar', // Static value for the receiver
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS responded with status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Email Service Error:', error);
    throw error; // Re-throw so the UI component can catch and show error state
  }
};
