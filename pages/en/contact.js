// contact.js
import StaticPage from '../../components/pages/StaticPage';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <StaticPage title="Contact">
      <h1>Contact Me</h1>
      <p>
        To enhance or purchase this Bitcoin Shop template, kindly reach out to me via email at{' '}
        <Link href="mailto:40230@pm.me">40230@pm.me</Link>
      </p>
      <p><Link href="https://fabohax.xyz">fabohax.xyz</Link></p>
    </StaticPage>
  );
};

export default ContactPage;
