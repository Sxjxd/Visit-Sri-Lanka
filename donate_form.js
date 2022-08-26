
const form = document.querySelector('form');
const completePaymentButton = document.querySelector('button#donateBtn');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
  event.preventDefault();
  validate();
  form.reportValidity();
  if (form.checkValidity() === false) {
    console.log('Invalid data found');
    // Handle invalid form data.
  } else {
    // On a production site do form submission.
    completePaymentButton.textContent = 'Processing Payment......';
    completePaymentButton.disabled = 'true';
    setTimeout(() => {alert('Payment Successful! Thank you.');}, 500);
  }
}

// Do form validation.
function validate() {
   let message= '';
   if (!/someregex/.test(someField.value)) {
     console.log(`Invalid value ${someField.value} for someField`);
	 	 message = 'Explain how to enter a valid value';
   }
   someInput.setCustomValidity(message);
}


