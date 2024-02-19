let ask = document.querySelector("#ask");
let btn = document.querySelector("#btn");
let text = document.querySelector("#answer");
let balls = document.querySelector(".balls");

let answers = [
  "да",
  "конечно",
  "бесспорно",
  "должно быть так",
  "возможно",
  "шансов мало",
  "нет",
  "звезды говорят нет",
  "не могу сказать",
  "сейчас неизвестно",
  "спросите позже",
];

let words = [
  "Почему",
  "Зачем",
  "Как",
  "Где",
  "Что",
  "Кто",
  "Чей",
  "Когда",
  "Сколько",
  "Насколько",
  "Который",
  "Какой",
  "Каков",
  "Куда",
  "Откуда",
  "Докуда",
];

let getQuestion = function() {
  let check = () =>
    words.some((el) =>
      ask.value.toLowerCase().split(" ")[0].includes(el.toLowerCase())
    );
    check();
    
  let shar = () => {
    (check() === false)
      ? (text.textContent = answers[Math.floor(Math.random() * answers.length)])
        : (text.textContent = `Задайте вопрос на "да или нет"`);
    };
    shar();

ask.value = "";
};


btn.addEventListener("click", getQuestion);
document.querySelector("#ask").addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    getQuestion()
  }
});
balls.addEventListener("click", getQuestion);