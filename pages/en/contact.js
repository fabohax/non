import StaticPage from '../../components/pages/StaticPage';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <StaticPage title="Contacto">
      <h1>Contacto</h1>
      <p>Para consultas sobre NON20, escríbenos a <Link href="mailto:40230@pm.me">40230@pm.me</Link>.</p>
    </StaticPage>
  );
}
