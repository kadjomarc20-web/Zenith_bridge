import { CONTACT, whatsappLink } from '../../config/contact.js';

export default function ContactInfo() {
  return (
    <div data-reveal className="bg-blue-50 p-8 rounded-2xl space-y-6 dark:bg-gray-800">
      <h2 className="text-xl font-bold text-slate-800 mb-2 dark:text-white">Contact Direct</h2>
      <div className="text-slate-600 space-y-2 flex flex-col dark:text-gray-300">
        <a href={CONTACT.phoneHref} className="hover:text-blue-400 transition flex items-center gap-1">
          📞 Téléphone : {CONTACT.phoneDisplay}
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition flex items-center gap-1">
          💬 WhatsApp : {CONTACT.whatsappDisplay}
        </a>
        <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-600 transition flex items-center gap-1">
          ✉️ Email : {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
