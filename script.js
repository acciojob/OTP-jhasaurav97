//your JS code here. If required.
  const inputs = document.querySelectorAll(".code");
    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
  const value = e.target.value;

  // Restrict to one digit
  input.value = value.slice(0, 1);

  if (value && index < inputs.length - 1) {
    setTimeout(() => {
      inputs[index + 1].focus(); // Add delay to allow Cypress to detect change
    }, 0);
  }
});

      input.addEventListener('keydown', (e) => {
        if(e.key === 'Backspace'){
          if(input.value === '' && index > 0){
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
          }
        }else if(e.key >= '0' && e.key <= '9'){
          // Allow digits
        }else{
          e.preventDefault(); // Block non-digits
        }
      })
      input.addEventListener("paste", (e) => {
        e.preventDefault();
        const data = e.clipboardData.getData('text').slice(0, 6);
        data.split('').forEach((char, i) => {
          if(inputs[i]){
            inputs[i].value = char;
          }
        })
        if(inputs[data.length - 1]){
          inputs[data.length - 1].focus();
        }
      })
    })
    // Auto focus first input on load
    window.addEventListener('load', () => inputs[0].focus());