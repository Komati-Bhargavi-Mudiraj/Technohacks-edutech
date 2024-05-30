async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);

        document.getElementById('converted-amount').innerText = `${convertedAmount} ${toCurrency}`;
    } catch (error) {
        alert('Error fetching exchange rate data. Please try again later.');
    }
}
