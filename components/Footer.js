import Link from 'next/link';


const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="text-sm text-center py-8">
      <ExternalLink href="https://twitter.com/hammashamzah">
        @hammashamzah
      </ExternalLink>
      <span classame="text-white">
      ·
      </span>
      <ExternalLink href="https://www.linkedin.com/in/hammashamzah/">
        LinkedIn
      </ExternalLink>

    </footer>
  );
}
