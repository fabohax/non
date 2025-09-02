// contact.js
import StaticPage from '../../components/pages/StaticPage';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <StaticPage title="Contact">
      <h1>Contact Us</h1>
      <p>
        For any inquiries or questions, please send an email to{' '}
        <Link href="mailto:40230@pm.me">40230@pm.me</Link>.
      </p>
      <p>
        You can also check my site at:{' '}
        <Link href="https://fabohax.xyz" target="_blank">
          fabohax.xyz
        </Link>
      </p>
    </StaticPage>
  );
};

export default ContactPage;
