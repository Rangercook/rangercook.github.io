// public/script.js

const stripe = Stripe('pk_test_51RldT7D1tu4jeqnHEBaGMUlcU6Fh3GrJDHjf7O2JCKTC7jxeGniyVrjP7ReJnHBzBzyLLmDfODVvpKd5KngHFYgI0036USj7VN');

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.buy-now');

  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const packageType = button.dataset.package;

      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ packageType })
      });

      const session = await response.json();

      if (session.id) {
        stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        alert('Error creating checkout session.');
      }
    });
  });
});
