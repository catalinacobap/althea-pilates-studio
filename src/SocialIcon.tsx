export default function SocialIcon({ type }: { type: 'instagram' | 'whatsapp' | 'location' }) {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
    {type === 'instagram' ? <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></> : type === 'location' ? <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></> : <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.7 7.5L3 20.5l1.4-4.6a8.5 8.5 0 1 1 16.1-4.3Z" /><path d="m8.2 7.2 1.5-.2 1.1 2.6-1.1 1.1a8 8 0 0 0 3.6 3.6l1.1-1.1 2.6 1.1-.2 1.5c-.2 1.3-2 1.6-3.3 1-3-1.2-5.3-3.5-6.5-6.5-.6-1.3-.3-3.1 1.2-3.1Z" /></>}
  </svg>
}
