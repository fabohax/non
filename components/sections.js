import Link from 'next/link';
import { useRouter } from 'next/router';

const LOCALES = ['en', 'es', 'pt', 'tr', 'ru'];

export default function Sections() {
  const router = useRouter();
  const asPath = router?.asPath || '/';
  const firstSeg = asPath.split('?')[0].split('#')[0].split('/').filter(Boolean)[0];
  const locale = LOCALES.includes(firstSeg) ? firstSeg : 'en';

  return (
    <div className="sections">
      {/* Clothing collections could be linked here in future (e.g., /men, /women, /sale) */}
    </div>
  );
}
