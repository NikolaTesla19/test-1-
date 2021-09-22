'use strict';

window.onload = () => {
  let formSubmit = document.getElementById('formSubmit');
  let formInput = document.getElementById('formInput');
  formSubmit.addEventListener('click', async (event) => {
     event.preventDefault();
     if (formInput.value.trim() === '') {
       alert('Поле не заполнено!');
     } else {
       try {
         let response = await fetch ('https://httpbin.org/post', {
            method: 'POST',
            headers: {
            'Content-Type': 'text/plain'
            },
            body: formInput.value.trim()
         });
         let answer = await response.json();
         alert(`Сервер получил данные: "${answer.data}", код ответа: ${response.status}`)
       } catch(err) {
         alert('Сервер временно недоступен, попробуйте позже!')
       }

     }
  })
}
