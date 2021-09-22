'use strict';

window.onload = function () {
  var formSubmit = document.getElementById('formSubmit');
  var formInput = document.getElementById('formInput');
  formSubmit.addEventListener('click', async function (event) {
    event.preventDefault();
    if (formInput.value.trim() === '') {
      alert('Поле не заполнено!');
    } else {
      try {
        var response = await fetch('https://httpbin.org/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: formInput.value.trim()
        });
        var answer = await response.json();
        alert('\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0434\u0430\u043D\u043D\u044B\u0435: "' + answer.data + '", \u043A\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u0430: ' + response.status);
      } catch (err) {
        alert('Сервер временно недоступен, попробуйте позже!');
      }
    }
  });
};