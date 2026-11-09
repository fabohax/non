import StaticPage from '../../components/pages/StaticPage';

export default function FAQPage() {
  return (
    <StaticPage title="Preguntas frecuentes">
      <h1>Preguntas frecuentes</h1>
      <h2>¿Cómo compro una prenda?</h2>
      <p>Explora la Cápsula Cero, abre la ficha de una prenda, selecciona sus opciones disponibles y añádela al carrito.</p>
      <h2>¿Cómo funciona el pago?</h2>
      <p>El proceso de pago que aparece en esta versión es una demostración. No genera una factura de pago ni confirma transacciones; no envíes dinero a la dirección que muestra.</p>
      <h2>¿Dónde puedo ver la información de una prenda?</h2>
      <p>Abre su ficha para consultar descripción, precio, tallas y colores disponibles.</p>
      <h2>¿Cómo contacto con NON20?</h2>
      <p>Escríbenos a <a href="mailto:40230@pm.me">40230@pm.me</a>.</p>
    </StaticPage>
  );
}
