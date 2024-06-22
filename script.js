const scriptURL = 'https://script.google.com/macros/s/AKfycbxBrtbwnhfo2EgC-pom2k4JHRiWOYQdORYqAYol7SSMsSsar8Bo5fQMhw9x1qTiT1Sbpw/exec';
  const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML='Thanks for Subscribing';
        form.reset();
        setTimeout(function(){
            msg.innerHTML='';  
        },5000);
        
      })
      .catch(error => console.error('Error!', error.message))
  });