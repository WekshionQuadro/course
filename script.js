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

function copyCode() {
  let codeText = document.getElementById("bot-code").innerText;

  navigator.clipboard.writeText(codeText)
    .then(function () {
      alert("Код успешно скопирован в буфер обмена!");
    })
    .catch(function (err) {
      alert("Произошла ошибка при копировании: " + err);
    });
}