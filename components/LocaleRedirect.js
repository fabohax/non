import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SUPPORTED = ['en', 'es', 'pt', 'tr', 'ru'];

export default function LocaleRedirect({ to = '' }) {
  const router = useRouter();

  useEffect(() => {
    const deviceLanguage = (typeof navigator !== 'undefined' && navigator.language)
      ? navigator.language.slice(0, 2)
      : 'en';

    const locale = SUPPORTED.includes(deviceLanguage) ? deviceLanguage : 'en';
    const suffix = to.startsWith('/') ? to : `/${to}`;

    // Special case for root
    const path = to ? `/${locale}${suffix}` : `/${locale}`;

    router.replace(path);
  }, [router, to]);

  return null;
}
