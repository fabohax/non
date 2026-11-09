import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCart } from './Cart';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [satoshis, setSatoshis] = useState(null);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then((response) => response.json())
      .then((data) => setSatoshis(Math.floor((totalPrice / data.bitcoin.usd) * 100000000)))
      .catch((error) => console.log('No se pudo consultar el precio de Bitcoin:', error));
  }, [totalPrice]);

  const closeCheckout = () => window.location.reload();

  return (
    <div className="popup">
      <div className="popup-content text-center justify-center items-center">
        <strong><span>Pedido de demostración</span></strong>
        <div className="mx-auto bg-white">
          <Image src="/qr.svg" width={300} height={300} alt="Código QR de demostración" className="w-full rounded-xl" />
        </div>
        <p>{cartItems.length} {cartItems.length === 1 ? 'artículo' : 'artículos'} en el carrito.</p>
        <p>Importe estimado: {satoshis !== null ? satoshis : totalPrice} satoshis.</p>
        <div className="lnurl">lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkx6r0wpc8jerfwdnh2um5xccsl09evg</div>
        <p className="checkout-notice">Esta pantalla es solo una demostración. No envíes dinero: el QR y la dirección no generan ni verifican pedidos.</p>
        <span>
          Consulta los <Link href="/es/terms" className="hover:underline font-bold">Términos de servicio</Link> y la <Link href="/es/privacy" className="hover:underline font-bold">Política de privacidad</Link>.
        </span>
      </div>
      <button onClick={closeCheckout} className="x" aria-label="Cerrar">×</button>
    </div>
  );
};

export default Checkout;
