// src/pages/Contact.js
import React from "react";
import ContactForm from "../components/contact/ContactForm.js";
import FAQs from "../components/contact/FAQs.js";

const Contact = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">If you have any questions or concerns, please feel free to reach out to us via email:</p>
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a>
            <p className="mt-4 mb-4">You can also reach us on our social media platforms:</p>
            <ul className="list-disc ml-8 mb-8">
                <li><a href="https://www.facebook.com/example" className="text-blue-600 hover:underline">Facebook</a></li>
                <li><a href="https://www.instagram.com/example" className="text-blue-600 hover:underline">Instagram</a></li>
                <li><a href="https://www.twitter.com/example" className="text-blue-600 hover:underline">Twitter</a></li>
            </ul>
            <p className="mb-4">For more updates and information, follow us on our social media channels.</p>

            <ContactForm />
            <FAQs />
        </div>
    );
}

export default Contact;
