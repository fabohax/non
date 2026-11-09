import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CheckoutRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/es/cart'); }, [router]);
  return null;
}
