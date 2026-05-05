
function insertToken() {

  let userToken = prompt("Шаг 1: Введите токен, который вам выдал BotFather:");

  if (userToken != null && userToken.trim() !== "") {


    let codeBlock = document.getElementById("bot-code");


    let newCode = codeBlock.innerText.replace("YOUR_TOKEN_HERE", userToken);
    codeBlock.innerText = newCode;

    alert("Успех! Ваш токен успешно добавлен. Теперь скопируйте код и запустите скрипт.");
  } else {
    alert("Действие отменено или токен не был введен.");
  }
}