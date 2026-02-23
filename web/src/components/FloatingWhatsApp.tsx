type FloatingWhatsAppProps = {
  phone: string;
};

export default function FloatingWhatsApp({ phone }: FloatingWhatsAppProps) {
  const normalizedPhone = phone.replace(/[^\d]/g, "");
  return (
    <a
      href={`https://wa.me/${normalizedPhone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-soft transition hover:translate-y-[-2px]"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.02 5.33c-5.85 0-10.6 4.64-10.6 10.38 0 1.83.5 3.63 1.45 5.2L5 27l6.3-1.65c1.53.82 3.25 1.25 4.99 1.25h.01c5.84 0 10.6-4.64 10.6-10.38 0-5.74-4.76-10.88-10.88-10.88zm6.19 14.8c-.26.73-1.49 1.38-2.06 1.45-.5.06-1.14.1-1.84-.12-.42-.13-.95-.3-1.64-.6-2.88-1.26-4.74-4.22-4.88-4.4-.13-.18-1.18-1.54-1.18-2.94 0-1.4.73-2.09.98-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.4-.07.62.47.26.61.89 2.12.97 2.27.09.16.15.34.03.53-.12.2-.18.34-.35.52-.18.18-.37.4-.52.54-.18.18-.37.37-.18.71.19.34.85 1.39 1.82 2.26 1.26 1.12 2.32 1.46 2.66 1.65.34.19.54.16.73-.1.2-.26.83-.96 1.05-1.29.22-.33.45-.27.75-.16.3.12 1.9.89 2.23 1.05.33.16.55.25.63.39.07.14.07.8-.2 1.53z" />
      </svg>
    </a>
  );
}
