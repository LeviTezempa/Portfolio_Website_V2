import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Link = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: 'https://github.com',
      label: 'GitHub Profile',
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com',
      label: 'LinkedIn Profile',
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      url: 'mailto:levindikum@gmail.com',
      label: 'Email Me',
    },
    {
      id: 4,
      icon: <FaFileAlt />,
      url: '/Levi_Tezempa_Resume.pdf',
      label: 'Resume',
    },
  ];

  return (
    <div className="social-links-wrap" aria-label="Social links">
      <div className="social-links">
        {socialLinks.map(({ id, icon, url, label }) => {
          const isExternalLink = /^https?:\/\//.test(url);

          return (
            <a
              key={id}
              href={url}
              className="social-link"
              target={isExternalLink ? '_blank' : undefined}
              rel={isExternalLink ? 'noopener noreferrer' : undefined}
              aria-label={label}
            >
              {icon}
            </a>
          );
        })}
      </div>

      <a className="social-cta" href="/Levi_Tezempa_Resume.pdf" download>
        Download CV
      </a>
    </div>
  );
};

export default Link;