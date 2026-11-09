import StaticPage from '../../components/pages/StaticPage';

export default function PrivacyPolicyPage() {
  return (
    <StaticPage title="Política de privacidad">
      <h1>Política de privacidad</h1>
      <p>Esta versión de NON20 es una demostración de tienda. El carrito se guarda en el almacenamiento local del navegador para mantener los artículos seleccionados en ese dispositivo.</p>
      <h2>Información que procesa el sitio</h2>
      <p>El sitio no incluye una cuenta de usuario, un formulario de compra ni un sistema de pedidos conectado a un servidor. No introduzcas información personal o de pago en la demostración.</p>
      <h2>Servicios externos</h2>
      <p>La pantalla de pago consulta el precio de Bitcoin a CoinGecko para mostrar una conversión estimada. La consulta se realiza desde el navegador. El proceso no verifica pagos ni completa pedidos.</p>
      <h2>Almacenamiento local</h2>
      <p>Puedes borrar los artículos guardados limpiando el carrito o los datos del sitio en tu navegador.</p>
      <h2>Contacto</h2>
      <p>Para consultas sobre privacidad, escribe a <a href="mailto:40230@pm.me">40230@pm.me</a>.</p>
    </StaticPage>
  );
}
