// Функция подстановки токена (уже была)
function insertToken() {
  let userToken = prompt("Шаг 1: Введите токен, который вам выдал BotFather:");

  if (userToken != null && userToken.trim() !== "") {
    let codeBlock = document.getElementById("bot-code");

    let newCode = codeBlock.innerText.replace("YOUR_TOKEN_HERE", userToken);
    codeBlock.innerText = newCode;

    alert("Успех! Ваш токен успешно добавлен. Теперь можете скопировать код.");
  } else {
    alert("Действие отменено или токен не был введен.");
  }
}

// Новая функция для копирования кода в буфер обмена
function copyCode() {
  // Получаем текст из блока с кодом
  let codeText = document.getElementById("bot-code").innerText;

  // Используем API буфера обмена для копирования
  navigator.clipboard.writeText(codeText)
    .then(function () {
      // Выводим уведомление об успехе
      alert("Код успешно скопирован в буфер обмена!");
    })
    .catch(function (err) {
      // Обработка ошибки, если браузер блокирует копирование
      alert("Произошла ошибка при копировании: " + err);
    });
}