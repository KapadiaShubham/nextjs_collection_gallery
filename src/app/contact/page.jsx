'use client';

import {
  Mail,
  Phone,
  MapPin,
  // Linkedin,
  MessageSquareText,
} from 'lucide-react';

const contactInfo = {
  whatsapp: {
    label: 'WhatsApp',
    number: '+91 99043 74674',
    link: 'https://wa.me/919904374674',
  },
  phone: {
    label: 'Phone',
    number: '+91 99043 74674',
    link: 'tel:+919904374674',
  },
  email: {
    label: 'Email',
    address: 'shilpakapadia99@gmail.com',
    link: 'mailto:shilpakapadia99@gmail.com',
  },
  // linkedin: {
  //   label: 'LinkedIn',
  //   username: 'linkedin.com/in/myprofile',
  //   link: 'https://linkedin.com/in/myprofile',
  // },
  location: 'Surat, Gujarat',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h1>
        <p className="text-gray-600 mb-10">
          Feel free to reach out using any of the methods below.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <MessageSquareText className="text-green-500 w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-700">{contactInfo.whatsapp.label}</p>
              <a
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-semibold hover:underline"
              >
                {contactInfo.whatsapp.number}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600 w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-700">{contactInfo.phone.label}</p>
              <a
                href={contactInfo.phone.link}
                className="text-gray-900 font-semibold hover:underline"
              >
                {contactInfo.phone.number}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-red-500 w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-700">{contactInfo.email.label}</p>
              <a
                href={contactInfo.email.link}
                className="text-gray-900 font-semibold hover:underline"
              >
                {contactInfo.email.address}
              </a>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4">
            <Linkedin className="text-blue-700 w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-700">{contactInfo.linkedin.label}</p>
              <a
                href={contactInfo.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-semibold hover:underline"
              >
                {contactInfo.linkedin.username}
              </a>
            </div>
          </div> */}

          <div className="flex items-center space-x-4">
            <MapPin className="text-purple-500 w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-700">Location</p>
              <p className="text-gray-900 font-semibold">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
