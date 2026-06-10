export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5h2.5l-.4 3H14v8.5h-3.5V11.5H9V8.5h1.5V7c0-1.2.4-2.2 1.1-3 .8-.8 1.8-1.2 3.1-1.2.9 0 1.7.1 2.4.4V6H14c-.7 0-1.2.2-1.5.5-.3.4-.5.9-.5 1.5v.5z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.7 5 12 5 12 5s-5.7 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9.3 2 12 2 12s0 2.7.4 4.8a2.5 2.5 0 0 0 1.8 1.8C6.3 19 12 19 12 19s5.7 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-2.1.4-4.8.4-4.8s0-2.7-.4-4.8zM10 15.5V8.5l5.5 3.5L10 15.5z" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
