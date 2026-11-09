import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LocaleRedirect({ to = '' }) {
  const router = useRouter();

  useEffect(() => {
    const suffix = to.startsWith('/') ? to : `/${to}`;
    const path = to ? `/es${suffix}` : '/es';

    router.replace(path);
  }, [router, to]);

  return null;
}
