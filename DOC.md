# NON20 // THE 20% ANOMALY - PLATAFORMA VIRTUAL & NODO DE VENTA

```
   ███╗   ██╗ ██████╗ ███╗   ██╗██████╗  ██████╗ 
   ████╗  ██║██╔═══██╗████╗  ██║╚════██╗██╔═══██╗
   ██╔██╗ ██║██║   ██║██╔██╗ ██║ █████╔╝██║   ██║
   ██║╚██╗██║██║   ██║██║╚██╗██║██╔═══╝ ██║   ██║
   ██║ ╚████║╚██████╔╝██║ ╚████║███████╗╚██████╔╝
   ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ 
        [ NODO CLANDESTINO // CALLAO - PERÚ ]
```

> **SISTEMA DE COMERCIO ALTERNATIVO Y RESERVA DE ANOMALÍAS**  
> *Not made for everyone. Not designed to fit in. WEAR THE ANOMALY.*

---

## 01. VISIÓN GENERAL DE LA ARQUITECTURA

La tienda virtual de **NON20** está construida como un Single-Page Web Application (SPA) minimalista de alto contraste y estética *Cyber-Grunge Devocional / Dark Industrial*. 

El frontend funciona como una **Terminal de Comandos / Visor Técnico** donde los clientes interactúan con la colección **CÁPSULA CERO**, consultan planos técnicos de prendas, inspeccionan herrajes modulares (*Hardware Alchemy*) y ejecutan reservas de producción bajo demanda (*Pre-Order*).

---

## 02. PASARELAS DE PAGO INTEGRADAS

Para preservar la soberanía del usuario y la accesibilidad en el mercado local y global, la plataforma soporta dos infraestructuras principales de procesamiento financiero:

### A. INFRAESTRUCTURA TRADICIONAL & LOCAL (CULQI INTEGRATION)
Procesamiento de moneda local (**PEN / S/**) para entregas a domicilio en Callao y Lima Metropolitana mediante el SDK de Culqi v4.

* **Tarjetas Aceptadas:** Visa, Mastercard, AMEX, Diners Club.
* **Billeteras Digitales Nacionales:** Yape, PLIN (vía Código QR dinámico Culqi).
* **Flujo Operativo:**
  1. El cliente completa sus datos de despacho (Callao / Lima).
  2. Se invoca la pasarela `Culqi.checkout`.
  3. Tras la confirmación del `charge_token`, el backend emite un **Hash de Pedido** firmado digitalmente y asigna un número de prenda dentro de la serie limitada de 75 piezas.

### B. PROTOCOLOS CYPHERPUNK & CRIPTO-PAGOS (DESCENTRALIZADO)
Integración nativa para la minoría estadística que prioriza la soberanía financiera y el anonimato transactional.

```
[ PROTOCOLOS SOPORTADOS ]
 ├── BITCOIN (BTC) ---------> On-Chain (Mempool Verification)
 ├── LIGHTNING NETWORK -----> Instant Settlement (LNURL / BOLT11)
 ├── ETHEREUM (ETH) --------> ERC-20 (USDT / USDC / ETH)
 └── SOLANA (SOL) ----------> High-Speed Micro-Tx (SPL Tokens)
```

* **Flujo de Pago Cripto:**
  1. Selección de red en la pantalla de *Checkout*.
  2. Generación dinámica de invoice con tasa de cambio congelada por 15 minutos (Oracle API).
  3. Verificación automática en la Blockchain / Nodo Lightning.
  4. Generación automática del certificado de autenticidad en el manifiesto impreso del *Cofre de la Anomalía*.

---

## 03. ESTRUCTURA DE ARCHIVOS DEL PROYECTO

```
non20-store/
├── index.html               # Frontend SPA (Single File Build)
├── README.md                # Documentación del sistema y especificaciones
└── config/
    ├── culqi.config.js      # Configuración de llaves pública/privada Culqi
    └── crypto.nodes.json    # Endpoints RPC & Direcciones públicas de recepción
```

---

## 04. CONFIGURACIÓN E INSTALACIÓN

### REQUISITOS PREVIOS
* Servidor web estático (Nginx, Vercel, Netlify o GitHub Pages).
* Llave Pública de Culqi (`pk_live_...` o `pk_test_...`).
* Dirección XPUB / Nodo Lightning para recepción de criptoactivos.

### DESPLIEGUE RÁPIDO
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/non20-brand/terminal-store.git
   cd terminal-store
   ```
2. Reemplazar las credenciales en la sección de scripts de `index.html`:
   ```javascript
   const CULQI_PUBLIC_KEY = 'pk_test_YOUR_KEY_HERE';
   const BITCOIN_RECEIVE_ADDR = 'bc1q_YOUR_BTC_ADDRESS_HERE';
   const LIGHTNING_ADDRESS = 'anomalia@node.non20.com';
   ```
3. Ejecutar un servidor local para pruebas:
   ```bash
   python3 -m http.server 8080
   ```

---

## 05. ESPECIFICACIONES DE LOGÍSTICA & DESPACHO

El nodo de despacho físico opera desde **Callao, Perú**.

* **Caja de Empaque:** *El Cofre de la Anomalía* (Cartón microcorrugado negro 25x15x10cm).
* **Sello:** Matriz de caucho industrial impreso en tinta blanca/plata.
* **Contenido Interno:**
  * Prenda empacada en papel de seda blanco puritano.
  * Kit de herrajes en bolsas Mylar herméticas termoselladas.
  * Manifiesto impreso en cartulina opalina con tipografía typewriter y micro-poema único.

---

## 06. MANIFEST // NON20

> *"El 80% sigue patrones establecidos. El otro 20% cuestiona, transforma y construye su propia identidad. NON20 no diseña ropa para el estándar; construye uniformes para la anomalía."*