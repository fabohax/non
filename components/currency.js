/* Currency.js */
import { useState } from 'react';

const Currency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('PEN');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Implement logic to handle Currency change
  };

  return (
    <div className="dropdown cy">
      <select className="dropdown-select" value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="SAT">satoshis (SAT)</option>
        <option value="USD">Dólar estadounidense (USD)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="JPY">Yen japonés (JPY)</option>
        <option value="GBP">Libra esterlina (GBP)</option>
        <option value="CHF">Franco suizo (CHF)</option>
        <option value="CAD">Dólar canadiense (CAD)</option>
        <option value="AUD">Dólar australiano (AUD)</option>
        <option value="NZD">Dólar neozelandés (NZD)</option>
        <option value="CNY">Yuan chino (CNY)</option>
        <option value="INR">Rupia india (INR)</option>
        <option value="RUB">Rublo ruso (RUB)</option>
        <option value="BRL">Real brasileño (BRL)</option>
        <option value="MXN">Peso mexicano (MXN)</option>
        <option value="ZAR">Rand sudafricano (ZAR)</option>
        <option value="TRY">Lira turca (TRY)</option>
        <option value="SAR">Riyal saudí (SAR)</option>
        <option value="AED">Dírham de los Emiratos Árabes Unidos (AED)</option>
        <option value="SGD">Dólar singapurense (SGD)</option>
        <option value="HKD">Dólar de Hong Kong (HKD)</option>
        <option value="KRW">Won surcoreano (KRW)</option>
        <option value="SEK">Corona sueca (SEK)</option>
        <option value="NOK">Corona noruega (NOK)</option>
        <option value="DKK">Corona danesa (DKK)</option>
        <option value="PLN">Złoty polaco (PLN)</option>
        <option value="THB">Baht tailandés (THB)</option>
        <option value="IDR">Rupia indonesia (IDR)</option>
        <option value="MYR">Ringgit malasio (MYR)</option>
        <option value="PHP">Peso filipino (PHP)</option>
        <option value="PEN">Sol peruano (PEN)</option>
        <option value="ARS">Peso argentino (ARS)</option>
        <option value="COP">Peso colombiano (COP)</option>
        <option value="CLP">Peso chileno (CLP)</option>
        <option value="EGP">Libra egipcia (EGP)</option>
        <option value="ILS">Séquel israelí (ILS)</option>
        <option value="PKR">Rupia pakistaní (PKR)</option>
        <option value="KWD">Dinar kuwaití (KWD)</option>
        <option value="QAR">Riyal catarí (QAR)</option>
        <option value="OMR">Rial omaní (OMR)</option>
        <option value="VEF">Bolívar venezolano (VEF)</option>
        <option value="CZK">Corona checa (CZK)</option>
        <option value="HUF">Florín húngaro (HUF)</option>
        <option value="RON">Leu rumano (RON)</option>
        <option value="HRK">Kuna croata (HRK)</option>
        <option value="BGN">Lev búlgaro (BGN)</option>
        <option value="ISK">Corona islandesa (ISK)</option>
        <option value="UAH">Grivna ucraniana (UAH)</option>
        <option value="VND">Dong vietnamita (VND)</option>
        <option value="KZT">Tenge kazajo (KZT)</option>
        <option value="NGN">Naira nigeriana (NGN)</option>
        <option value="KES">Chelín keniano (KES)</option>
        <option value="GHS">Cedi ghanés (GHS)</option>
      </select>
    </div>

  );
};

export default Currency;
