# NON20 — La anomalía del 20 %

```text
  ███╗   ██╗ ██████╗ ███╗   ██╗██████╗  ██████╗
  ████╗  ██║██╔═══██╗████╗  ██║╚════██╗██╔═══██╗
  ██╔██╗ ██║██║   ██║██╔██╗ ██║ █████╔╝██║   ██║
  ██║╚██╗██║██║   ██║██║╚██╗██║██╔═══╝ ██║   ██║
  ██║ ╚████║╚██████╔╝██║ ╚████║███████╗╚██████╔╝
  ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝

       [ NODO CLANDESTINO // CALLAO - PERÚ ]
```

**NON20 — THE 20% ANOMALY**

Tienda web de NON20, una marca conceptual de indumentaria urbana alternativa y accesorios de salud sexual con nodo de venta en Callao, Perú.

La experiencia presenta la **Cápsula Cero** bajo una estética industrial de alto contraste, combinando identidad visual, comercio electrónico y personalización de productos.

NON20 representa a la minoría que rechaza la homogeneización social y convierte su diferencia en soberanía identitaria.

El proyecto parte de una plantilla Next.js de comercio electrónico y conserva el catálogo, las fichas de producto, el carrito y una pantalla de proceso de pago demostrativa. Su evolución contempla una experiencia de personalización mediante **NON20 Configurator**.

---

## Especificaciones del proyecto

| Área | Especificación actual |
|---|---|
| Framework | Next.js 13.4 (Pages Router), React 18 y JavaScript/JSX; TypeScript habilitado. |
| Renderizado | Páginas de producto mediante `getStaticPaths` y `getStaticProps`. |
| Catálogo | 12 productos de ejemplo en `db/data.json`. |
| Opciones | Selección de tallas y colores según disponibilidad. |
| Carrito | Estado persistido en `localStorage` bajo la clave `cart`. |
| Idioma | Español. Ruta raíz redirige a `/es`. |
| Estilos | CSS global, Tailwind CSS 3 y tipografías Rajdhani, Roboto y Roboto Mono. |
| Backend | Sin API de pedidos, inventario persistente ni autenticación conectada. |
| Pagos | Pantalla demostrativa sin procesamiento real. |

## Identidad de marca

La marca se construye alrededor de dos universos complementarios:

- **SANTUARIO:** protección, disciplina, estructura y control.
- **ABISMO:** caos, exposición, ruptura y experimentación.

Estética: Cyber-Grunge Devocional.

Paleta:
- Blanco puritano.
- Negro obsidiana.

Lenguaje visual: industrial, gótico y avant-garde.

Las prendas se conciben como armaduras urbanas modulares, con túnicas asimétricas, micro-ojales, correas, anclajes ocultos y componentes intercambiables.

Los accesorios de salud sexual siguen la misma lógica de diseño industrial, funcionalidad y soberanía corporal.

---

## Visión de producto

NON20 no busca ser una tienda convencional de indumentaria. Busca construir un ecosistema de productos personalizables donde el usuario participa activamente en el diseño de su identidad.

La plataforma contempla cuatro áreas principales:

| Módulo | Descripción |
|---|---|
| NON20 Store | Catálogo y comercio electrónico de prendas y accesorios. |
| NON20 Collections | Colecciones temáticas Santuario / Abismo y ediciones limitadas. |
| NON20 Configurator | Personalización modular e interactiva de prendas y accesorios. |
| NON20 Intimate | Catálogo especializado en accesorios de salud sexual y bienestar íntimo. |

## NON20 Configurator

**Configurate your anomaly.**

El configurador será una de las funcionalidades centrales de la plataforma: una interfaz interactiva que permitirá personalizar prendas y construir configuraciones únicas a partir de componentes modulares.

En lugar de limitarse a elegir una talla y un color, el usuario podrá intervenir en la composición estética y funcional de cada pieza.

### Funcionalidades previstas

**1. Selección de producto base**

- Elegir una prenda del catálogo.
- Seleccionar modelo, talla y color.
- Visualizar las características y dimensiones disponibles.

**2. Personalización modular**

- Incorporar o retirar correas.
- Añadir micro-ojales y anclajes.
- Seleccionar hebillas, anillas y cierres.
- Modificar accesorios y elementos funcionales.
- Combinar componentes compatibles.

**3. Vista previa interactiva**

- Representación visual del producto personalizado.
- Actualización dinámica de los componentes.
- Visualización frontal y posterior cuando existan los recursos gráficos.
- Vista de detalles y materiales.

**4. Composición y precio**

- Precio base de la prenda.
- Coste adicional de cada componente.
- Actualización automática del precio total.
- Identificación de componentes disponibles y compatibles.

**5. Integración con la tienda**

- Guardar una configuración personalizada.
- Añadir la composición al carrito.
- Conservar las opciones seleccionadas en el pedido.
- Recuperar una configuración para continuar editándola.

### Experiencia de usuario propuesta

```text
PRODUCTO BASE
     |
     v
SELECCIONAR MODELO
     |
     v
ELEGIR TALLA Y COLOR
     |
     v
CONFIGURAR COMPONENTES
     |
     +---- Correas
     +---- Hebillas
     +---- Anclajes
     +---- Ojales
     +---- Accesorios
     |
     v
VISTA PREVIA
     |
     v
CALCULAR PRECIO
     |
     v
AÑADIR AL CARRITO
     |
     v
CONFIRMAR CONFIGURACIÓN
```

### Arquitectura técnica prevista

El configurador se desarrollará como un módulo independiente de la tienda, integrado con el catálogo y el carrito existente.

| Componente | Tecnología / responsabilidad |
|---|---|
| Configurator UI | React / Next.js. |
| Product Renderer | Composición visual de capas y componentes gráficos. |
| Configuration Engine | Estado, reglas de compatibilidad y opciones disponibles. |
| Pricing Engine | Cálculo del precio base y componentes adicionales. |
| Product Schema | Definición de productos, variantes y piezas modulares. |
| Cart Integration | Persistencia de la configuración seleccionada. |

La primera versión puede implementarse con composición de imágenes 2D por capas, evitando introducir complejidad 3D prematuramente.

Una evolución posterior podrá incorporar visualización 3D, rotación del producto y representación más avanzada de materiales y componentes.

---

## Recorrido de compra disponible

1. La ruta raíz redirige a `/es`.
2. La tienda muestra los productos del catálogo.
3. La ficha `/{id}` permite revisar descripción, precio y opciones.
4. El usuario puede agregar o quitar productos del carrito.
5. El carrito está disponible en `/es/cart`.
6. El carrito abre una pantalla de pago demostrativa.
7. La pantalla muestra un QR estático, un aviso de demostración y un importe estimado en satoshis basado en el precio de Bitcoin de CoinGecko.

**Importante:** el proceso de pago es exclusivamente demostrativo. Utiliza una dirección Lightning y un QR definidos en el código. No crea facturas individuales ni verifica pagos. No debe utilizarse para recibir pagos reales.

---

## Rutas principales

| Ruta | Propósito |
|---|---|
| `/` | Redirección a la versión en español. |
| `/es` | Portada y catálogo. |
| `/{id}` | Ficha dinámica de producto. |
| `/es/cart` | Carrito de compras. |
| `/es/about` | Información de marca. |
| `/es/contact` | Contacto. |
| `/es/faq` | Preguntas frecuentes. |
| `/es/privacy` | Política de privacidad. |
| `/es/terms` | Términos y condiciones. |

Rutas futuras:

| Ruta | Propósito |
|---|---|
| `/es/configurator` | Entrada al configurador. |
| `/es/configurator/{id}` | Personalización de un producto específico. |
| `/es/collections` | Colecciones y cápsulas. |
| `/es/intimate` | Catálogo de salud sexual. |

Las rutas futuras representan objetivos de desarrollo, no funcionalidades actualmente implementadas.

---

## Estructura de carpetas

```text
.
├── components/
│   ├── pages/
│   ├── store/
│   ├── product/
│   ├── cart/
│   └── configurator/       # Módulo futuro
├── db/
│   ├── data.json
│   └── translations.json
├── pages/
│   ├── [id].js
│   ├── _app.js
│   ├── es/
│   └── index.js
├── public/
│   ├── images/
│   ├── products/
│   └── assets/
├── src/
│   └── app/
├── DOC.md
└── README.md
```

La estructura del configurador es una propuesta de organización para su implementación futura.

---

## Requisitos y ejecución local

Requisitos: Node.js y npm.

No se requiere archivo `.env` para la demostración local actual.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Comandos disponibles:

```bash
npm run dev
npm run build
npm start
npm run lint
```

---

## Datos de catálogo

Cada producto de `db/data.json` utiliza una estructura similar a:

```json
{
  "id": "c1",
  "title": "Nombre de producto",
  "description": "Descripción",
  "price": 25,
  "currency": "USD",
  "image": "/01.avif",
  "tag": "tops",
  "category": "tops",
  "availableSizes": ["S", "M", "L"],
  "availableColors": ["negro", "blanco"],
  "material": "100 % algodón",
  "fit": "Regular"
}
```

### Modelo de datos futuro para el configurador

Los productos personalizables incorporarán una definición de componentes y reglas de compatibilidad.

Ejemplo conceptual:

```json
{
  "id": "c1",
  "title": "NON20 Modular Jacket",
  "basePrice": 299,
  "currency": "PEN",
  "configurable": true,
  "baseImage": "/products/jacket/base.png",
  "modules": [
    {
      "id": "straps",
      "name": "Correas",
      "required": false,
      "options": [
        {
          "id": "strap-black",
          "name": "Black Strap",
          "price": 25,
          "image": "/products/jacket/straps/black.png"
        }
      ]
    },
    {
      "id": "hardware",
      "name": "Herrajes",
      "required": false,
      "options": [
        {
          "id": "ring-steel",
          "name": "Steel Ring",
          "price": 12,
          "image": "/products/jacket/hardware/ring.png"
        }
      ]
    }
  ]
}
```

Esta estructura es ilustrativa y no representa todavía el esquema implementado en el catálogo.

Las imágenes deben estar disponibles bajo `public/`. Los identificadores de productos y componentes deben ser únicos.

---

## Estado de integraciones

El documento `DOC.md` define objetivos para la marca, incluyendo:

- Culqi y pagos locales.
- Pagos mediante redes cripto.
- Reservas de producción.
- Series limitadas y cápsulas.
- Logística desde Callao, Perú.
- Personalización de productos.

Estos puntos son especificaciones futuras, no integraciones activas.

Antes de habilitar pagos reales se requiere un backend que valide precios, inventario y transacciones, registre pedidos y gestione los estados de pago.

Las llaves privadas y credenciales deben permanecer del lado del servidor. Nunca deben exponerse en componentes, archivos JSON públicos o variables `NEXT_PUBLIC_*`.

---

## Roadmap de desarrollo

| Fase | Objetivo |
|---|---|
| 01 — Store | Consolidar catálogo, identidad visual y experiencia de compra. |
| 02 — Configurator MVP | Implementar personalización 2D por capas y selección de componentes. |
| 03 — Modular Commerce | Integrar configuraciones personalizadas con el carrito y los pedidos. |
| 04 — Payments | Implementar pagos reales y gestión de pedidos. |
| 05 — Advanced Configurator | Explorar visualización 3D, materiales y configuraciones avanzadas. |
| 06 — Ecosystem | Expandir colecciones, accesorios y productos de salud sexual. |

## Despliegue

La aplicación puede ejecutarse en cualquier entorno compatible con Next.js.

Para desplegar:

```bash
npm install
npm run build
npm start
```

Configurar dominio, HTTPS y variables de entorno según los servicios que se integren.

El despliegue actual no configura procesamiento de pagos, almacenamiento persistente de pedidos ni inventario compartido.

---

**NON20 IS NOT DESIGNED TO FIT IN.**

*Está diseñada para quienes hacen de su anomalía una identidad.*

**NO ENCAJAS. AQUÍ PERTENECES.**