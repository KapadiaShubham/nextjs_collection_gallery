'use client';

import {
  Mail,
  Phone,
  MapPin,
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
  location: 'Surat, Gujarat',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-40 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Reach out to us on any of the platforms below.
        </p>

        <div className="space-y-8 text-lg text-gray-800">
          <ContactItem
            Icon={MessageSquareText}
            label={contactInfo.whatsapp.label}
            value={contactInfo.whatsapp.number}
            link={contactInfo.whatsapp.link}
            color="text-green-500"
          />
          <ContactItem
            Icon={Phone}
            label={contactInfo.phone.label}
            value={contactInfo.phone.number}
            link={contactInfo.phone.link}
            color="text-blue-600"
          />
          <ContactItem
            Icon={Mail}
            label={contactInfo.email.label}
            value={contactInfo.email.address}
            link={contactInfo.email.link}
            color="text-red-500"
          />
          <ContactItem
            Icon={MapPin}
            label="Location"
            value={contactInfo.location}
            color="text-purple-600"
          />
        </div>
      </div>
    </main>
  );
}

function ContactItem({ Icon, label, value, link, color }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-900 hover:text-pink-500 transition"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        )}
      </div>
    </div>
  );
}
