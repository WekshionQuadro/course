// Функция, которая вызывается по обработчику событий onclick
function insertToken() {
  // Метод prompt () для запроса данных
  let userToken = prompt("Шаг 1: Введите токен, который вам выдал BotFather:");

  // Проверка, что пользователь ввел данные, а не нажал "Отмена"
  if (userToken != null && userToken.trim() !== "") {

    // Находим элемент с кодом на странице
    let codeBlock = document.getElementById("bot-code");

    // Заменяем заглушку на введенный токен
    let newCode = codeBlock.innerText.replace("YOUR_TOKEN_HERE", userToken);
    codeBlock.innerText = newCode;

    // Метод alert () для вывода результата
    alert("Успех! Ваш токен успешно добавлен. Теперь скопируйте код и запустите скрипт.");
  } else {
    alert("Действие отменено или токен не был введен.");
  }
}