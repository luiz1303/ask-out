const mainBtn = document.getElementById("mainBtn");
const secondBtn = document.getElementById("secondaryBtn");
const mainTitle = document.getElementById("mainTitle");
const image = document.getElementById("mainImage");
secondBtn.style.position = "relative";
image.src = "./src/cat-blink.gif";

let denyCount = 0;
const emotionList = [
  {
    count: 1,
    message: "Opção errada... Tente outra vez",
    image: "./src/wrong.gif",
    runAction: () => {
      secondBtn.style.position = "absolute";
    },
  },
  {
    count: 3,
    message: "Tente OUTRA vez",
    image: "./src/cat-disappointed.gif",
    runAction: () => {},
  },
  {
    count: 5,
    message: "Para com isso!",
    image: "./src/mad1.gif",
    runAction: () => {},
  },
  {
    count: 7,
    message: "Dica: Aperte o botão grande escrito >SIM<",
    image: "./src/arrow.gif",
    runAction: () => {
      mainBtn.classList.add("biggerBtn");
    },
  },
  {
    count: 9,
    message: "É sério isso?",
    image: "./src/bunny-what.gif",
    runAction: () => {},
  },
  {
    count: 13,
    message: "Ainda tentando? Pode continuar...",
    image: "./src/roll-eye.gif",
    runAction: () => {},
  },
  {
    count: 17,
    message: "Recusar NUNCA foi uma opção huahuahua",
    image: "./src/haha.gif",
    runAction: () => {
      mainTitle.style.color = "red";
    },
  },
  {
    count: 20,
    message: "Vamos ficar aqui pra sempre...",
    image: "./src/loop.gif",
    runAction: () => {
      mainTitle.style.color = "#ff1493";
    },
  },
  {
    count: 25,
    message: "Quer saber?",
    image: "./src/think.gif",
    runAction: () => {},
  },
  {
    count: 30,
    message: "Problema Resolvido!",
    image: "./src/solved.gif",
    runAction: () => {
      secondBtn.style.display = "none";
    },
  },
];

const changeButtonPosition = () => {
  const maxWidth = 0.9 * window.innerWidth;
  const maxHeight = 0.9 * window.innerHeight;

  const xPos = Math.floor(Math.random() * maxWidth);
  const yPos = Math.floor(Math.random() * maxHeight);
  secondBtn.style.left = `${xPos}px`;
  secondBtn.style.top = `${yPos}px`;
};

const handleMainBtn = () => {
  mainTitle.innerHTML = "Resposta certa! 😉";
  mainBtn.style.display = "none";
  secondBtn.style.display = "none";
  image.src = "./src/cat-love.gif";
};

const handleSecondBtn = () => {
  denyCount++;
  changeButtonPosition();

  const currentEmotion = emotionList?.find((item) => denyCount === item?.count);

  if (!!currentEmotion) {
    image.src = currentEmotion?.image;
    mainTitle.innerHTML = currentEmotion?.message;
    currentEmotion?.runAction();
  }
};

mainBtn.addEventListener("click", handleMainBtn);
secondBtn.addEventListener("mouseover", handleSecondBtn); // hover for desktop
secondBtn.addEventListener("touchstart", handleSecondBtn); // touch action required for mobile
