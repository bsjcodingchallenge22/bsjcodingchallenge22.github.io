"use strict";

const message = document.querySelector(".startmessage");

//default hidden profiles
document.querySelector(".answer").hidden = true;
document.querySelector(".start").hidden = true;
document.querySelector(".exit").hidden = true;
document.querySelector(".exitarrow").hidden = true;
document.querySelector(".startmessage").hidden = true;
document.querySelector(".question").hidden = true;
document.querySelector(".enter").hidden = true;
document.querySelector(".timer1").hidden = true;
document.querySelector(".timer2").hidden = true;
document.querySelector(".modal").hidden = true;
document.querySelector(".overlay").hidden = true;
document.querySelector(".tick1").hidden = true;
document.querySelector(".tick2").hidden = true;
document.querySelector(".cross1").hidden = true;
document.querySelector(".cross2").hidden = true;
document.querySelector(".no-number").hidden = true;
document.querySelector(".modal-howto").hidden = true;
document.querySelector(".overlay-howto").hidden = true;
document.querySelector(".modal-settings").hidden = true;
document.querySelector(".overlay-settings").hidden = true;
document.querySelector(".modal-info").hidden = true;
document.querySelector(".overlay-info").hidden = true;

//main play button actions
document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".play").hidden = true;
  document.querySelector(".howto").hidden = true;
  document.querySelector("h1").hidden = true;
  document.querySelector(".settings").hidden = true;
  document.querySelector(".info").hidden = true;
  document.querySelector(".chart").hidden = true;
  document.querySelector(".answer").hidden = false;
  document.querySelector(".question").hidden = false;
  document.querySelector(".enter").hidden = false;
  document.querySelector(".timer1").hidden = false;
  document.querySelector(".timer2").hidden = false;
  document.querySelector(".start").hidden = false;
  document.querySelector(".exit").hidden = false;
  document.querySelector(".exitarrow").hidden = false;
});

//start button actions
document.querySelector(".start").addEventListener("click", function () {
  document.querySelector(".start").hidden = true;
  document.querySelector(".startmessage").hidden = false;

  let timeInSeconds = 3;

  message.textContent = `Starting in ${timeInSeconds}...`;
  const countdown = setInterval(() => {
    timeInSeconds--;
    message.textContent = `Starting in ${timeInSeconds}...`;
    if (timeInSeconds < 1) {
      clearInterval(countdown);
      message.textContent = "Go!";
      setTimeout(() => {
        message.hidden = true;
        document.querySelector(".answer").style.opacity = 1;
        document.querySelector(".answer").style.pointerEvents = "all";
        document.querySelector(".enter").style.opacity = 1;
        document.querySelector(".enter").style.pointerEvents = "all";
        document.querySelector(".question").style.opacity = 1;
        document.querySelector(".timer1").style.opacity = 1;
        document.querySelector(".timer2").style.opacity = 1;
        document.querySelector("body").style.backgroundColor = "#5E885E";
        randomNumberGenerator;
        document.querySelector(
          ".question"
        ).textContent = `${number1}  x  ${number2}`;

        //timer 1

        let time = 60;
        const timer = document.querySelector(".timer1");

        timer.textContent = `${time}`;
        const countdown2 = setInterval(() => {
          time--;
          timer.textContent = `${time}`;
          if (time < 1) {
            clearInterval(countdown2);
            timer.textContent = `${time}`;
            document.querySelector("body").style.backgroundColor =
              backgroundColor;
            document.querySelector(".modal").hidden = false;
            document.querySelector(".overlay").hidden = false;
            document.querySelector(".score").textContent = `Score: ${score}`;
            document.querySelector(".answer").style.pointerEvents = "none";
            document.querySelector(".enter").style.pointerEvents = "none";
          }
          document
            .querySelector(".exit")
            .addEventListener("click", function () {
              clearInterval(countdown2);
              time = 60;
              timer.textContent = `${time}`;
            });
          document
            .querySelector(".main-menu")
            .addEventListener("click", function () {
              clearInterval(countdown2);
              time = 60;
              timer.textContent = `${time}`;
            });
          document
            .querySelector(".play-again")
            .addEventListener("click", function () {
              time = 60;
              timer.textContent = `${time}`;
            });
        }, 1000);

        //timer 2

        let time2 = 60;
        const timer2 = document.querySelector(".timer2");

        timer2.textContent = `${time2}`;
        const countdown3 = setInterval(() => {
          time2--;
          timer2.textContent = `${time2}`;
          if (time2 < 1) {
            clearInterval(countdown3);
          }
          document
            .querySelector(".exit")
            .addEventListener("click", function () {
              clearInterval(countdown3);
              time2 = 60;
              timer2.textContent = `${time2}`;
            });
          document
            .querySelector(".main-menu")
            .addEventListener("click", function () {
              clearInterval(countdown3);
              time2 = 60;
              timer2.textContent = `${time2}`;
            });
          document
            .querySelector(".play-again")
            .addEventListener("click", function () {
              time2 = 60;
              timer2.textContent = `${time2}`;
            });
        }, 1000);

        //background color change
        const backgroundOrange = setTimeout(() => {
          document.querySelector("body").style.backgroundColor = "#FFA056";
        }, 40000);
        const backgroundRed = setTimeout(() => {
          document.querySelector("body").style.backgroundColor = "#D04F4F";
        }, 50000);

        document.querySelector(".exit").addEventListener("click", function () {
          clearTimeout(backgroundOrange);
          clearTimeout(backgroundRed);
        });

        document
          .querySelector(".main-menu")
          .addEventListener("click", function () {
            clearTimeout(backgroundOrange);
            clearTimeout(backgroundRed);
          });
      }, 1000);
    }
    document.querySelector(".exit").addEventListener("click", function () {
      clearInterval(countdown);
      timeInSeconds = 3;
      message.textContent = `${timeInSeconds}`;
    });
    document.querySelector(".main-menu").addEventListener("click", function () {
      clearInterval(countdown);
      timeInSeconds = 3;
      message.textContent = `${timeInSeconds}`;
    });
    document
      .querySelector(".play-again")
      .addEventListener("click", function () {
        timeInSeconds = 3;
      });
  }, 1000);
});

//play again button actions

document.querySelector(".play-again").addEventListener("click", function () {
  document.querySelector(".modal").hidden = true;
  document.querySelector(".overlay").hidden = true;
  document.querySelector(".answer").style.opacity = 0.1;
  document.querySelector(".answer").style.pointerEvents = "none";
  document.querySelector(".enter").style.opacity = 0.1;
  document.querySelector(".enter").style.pointerEvents = "none";
  document.querySelector(".question").style.opacity = 0.1;
  document.querySelector(".timer1").style.opacity = 0.1;
  document.querySelector(".timer2").style.opacity = 0.1;
  document.querySelector(".start").hidden = false;
  document.querySelector(".question").textContent = "? x ?";
  document.querySelector(".answer").value = "";
});

//exit button actions
document.querySelector(".exit").addEventListener("click", function () {
  document.querySelector(".play").hidden = false;
  document.querySelector(".howto").hidden = false;
  document.querySelector("h1").hidden = false;
  document.querySelector(".answer").hidden = true;
  document.querySelector(".start").hidden = true;
  document.querySelector(".exit").hidden = true;
  document.querySelector(".exitarrow").hidden = true;
  document.querySelector(".startmessage").hidden = true;
  document.querySelector(".answer").hidden = true;
  document.querySelector(".question").hidden = true;
  document.querySelector(".enter").hidden = true;
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".timer1").hidden = true;
  document.querySelector(".timer2").hidden = true;
  document.querySelector(".answer").style.opacity = 0.1;
  document.querySelector(".answer").style.pointerEvents = "none";
  document.querySelector(".enter").style.opacity = 0.1;
  document.querySelector(".enter").style.pointerEvents = "none";
  document.querySelector(".question").style.opacity = 0.1;
  document.querySelector(".timer1").style.opacity = 0.1;
  document.querySelector(".timer2").style.opacity = 0.1;
  document.querySelector(".modal").hidden = true;
  document.querySelector(".overlay").hidden = true;
  document.querySelector(".question").textContent = "? x ?";
  document.querySelector(".settings").hidden = false;
  document.querySelector(".info").hidden = false;
  document.querySelector(".chart").hidden = false;
});

//main menu button actions
document.querySelector(".main-menu").addEventListener("click", function () {
  document.querySelector(".play").hidden = false;
  document.querySelector(".howto").hidden = false;
  document.querySelector("h1").hidden = false;
  document.querySelector(".answer").hidden = true;
  document.querySelector(".start").hidden = true;
  document.querySelector(".exit").hidden = true;
  document.querySelector(".exitarrow").hidden = true;
  document.querySelector(".startmessage").hidden = true;
  document.querySelector(".answer").hidden = true;
  document.querySelector(".question").hidden = true;
  document.querySelector(".enter").hidden = true;
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".timer1").hidden = true;
  document.querySelector(".timer2").hidden = true;
  document.querySelector(".answer").style.opacity = 0.1;
  document.querySelector(".answer").style.pointerEvents = "none";
  document.querySelector(".enter").style.opacity = 0.1;
  document.querySelector(".enter").style.pointerEvents = "none";
  document.querySelector(".question").style.opacity = 0.1;
  document.querySelector(".timer1").style.opacity = 0.1;
  document.querySelector(".timer2").style.opacity = 0.1;
  document.querySelector(".modal").hidden = true;
  document.querySelector(".overlay").hidden = true;
  document.querySelector(".question").textContent = "? x ?";
  document.querySelector(".settings").hidden = false;
  document.querySelector(".info").hidden = false;
  document.querySelector(".chart").hidden = false;
});

//game logic

let multiplier = 12;
let number1 = Math.trunc(Math.random() * multiplier) + 1;
let number2 = Math.trunc(Math.random() * multiplier) + 1;
let answer = number1 * number2;
const guess = Number(document.querySelector(".answer").value);
const question = document.querySelector(".question").textContent;
let score = 0;
function randomNumberGenerator() {
  number1 = Number(Math.trunc(Math.random() * multiplier) + 1);
  number2 = Number(Math.trunc(Math.random() * multiplier) + 1);
  answer = number1 * number2;
}

//guess button actions

document.querySelector(".enter").addEventListener("click", function () {
  const guess = Number(document.querySelector(".answer").value);
  if (guess === answer) {
    randomNumberGenerator();
    document.querySelector(
      ".question"
    ).textContent = `${number1}  x  ${number2}`;
    score++;
    document.querySelector(".tick1").hidden = false;
    document.querySelector(".tick2").hidden = false;
    setTimeout(() => {
      document.querySelector(".tick1").hidden = true;
      document.querySelector(".tick2").hidden = true;
    }, 1000);
    document.querySelector(".answer").value = "";
  } else if (!guess) {
    document.querySelector(".no-number").hidden = false;
    setTimeout(() => {
      document.querySelector(".no-number").hidden = true;
    }, 1000);
  } else if (guess != answer) {
    document.querySelector(".cross1").hidden = false;
    document.querySelector(".cross2").hidden = false;
    setTimeout(() => {
      document.querySelector(".cross1").hidden = true;
      document.querySelector(".cross2").hidden = true;
    }, 1000);
    document.querySelector(".answer").value = "";
  }
  document.querySelector(".play-again").addEventListener("click", function () {
    score = 0;
  });
  document.querySelector(".main-menu").addEventListener("click", function () {
    score = 0;
  });
  document.querySelector(".exit").addEventListener("click", function () {
    score = 0;
  });
});

document.querySelector(".answer").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.querySelector(".enter").click();
  }
});

//how to play button actions

document.querySelector(".howto").addEventListener("click", function () {
  document.querySelector(".modal-howto").hidden = false;
  document.querySelector(".overlay-howto").hidden = false;
});

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal-howto").hidden = true;
  document.querySelector(".overlay-howto").hidden = true;
});

document.addEventListener("keydown", function (esc) {
  if (esc.key === "Escape") {
    document.querySelector(".close-modal").click();
  }
});

document.querySelector(".settings").addEventListener("click", function () {
  document.querySelector(".modal-settings").hidden = false;
  document.querySelector(".overlay-settings").hidden = false;
});

document
  .querySelector(".close-modal-settings")
  .addEventListener("click", function () {
    document.querySelector(".modal-settings").hidden = true;
    document.querySelector(".overlay-settings").hidden = true;
  });

let backgroundColor = document.querySelector("body").style.backgroundColor;

document.querySelector(".red").addEventListener("click", function () {
  backgroundColor = "#ff4747";
  document.querySelector("body").style.backgroundColor = "#ff4747";
  document.querySelector(".red").style.border = "5px solid #54c83a";
  document.querySelector(".blue").style.border = "3px solid #a0a0a0";
  document.querySelector(".green").style.border = "3px solid #a0a0a0";
  document.querySelector(".yellow").style.border = "3px solid #a0a0a0";
  document.querySelector(".orange").style.border = "3px solid #a0a0a0";
  document.querySelector(".grey").style.border = "3px solid #a0a0a0";
  document.querySelector(".black").style.border = "3px solid #a0a0a0";
});

document.querySelector(".blue").addEventListener("click", function () {
  backgroundColor = "#84abc7";
  document.querySelector("body").style.backgroundColor = "#84abc7";
  document.querySelector(".blue").style.border = "5px solid #54c83a";
  document.querySelector(".red").style.border = "3px solid #a0a0a0";
  document.querySelector(".green").style.border = "3px solid #a0a0a0";
  document.querySelector(".yellow").style.border = "3px solid #a0a0a0";
  document.querySelector(".orange").style.border = "3px solid #a0a0a0";
  document.querySelector(".grey").style.border = "3px solid #a0a0a0";
  document.querySelector(".black").style.border = "3px solid #a0a0a0";
});

document.querySelector(".green").addEventListener("click", function () {
  backgroundColor = "#8fcd8c";
  document.querySelector("body").style.backgroundColor = "#8fcd8c";
  document.querySelector(".green").style.border = "5px solid #54c83a";
  document.querySelector(".red").style.border = "3px solid #a0a0a0";
  document.querySelector(".blue").style.border = "3px solid #a0a0a0";
  document.querySelector(".yellow").style.border = "3px solid #a0a0a0";
  document.querySelector(".orange").style.border = "3px solid #a0a0a0";
  document.querySelector(".grey").style.border = "3px solid #a0a0a0";
  document.querySelector(".black").style.border = "3px solid #a0a0a0";
});

document.querySelector(".yellow").addEventListener("click", function () {
  backgroundColor = "#ebea7d";
  document.querySelector("body").style.backgroundColor = "#ebea7d";
  document.querySelector(".yellow").style.border = "5px solid #54c83a";
  document.querySelector(".green").style.border = "3px solid #a0a0a0";
  document.querySelector(".red").style.border = "3px solid #a0a0a0";
  document.querySelector(".blue").style.border = "3px solid #a0a0a0";
  document.querySelector(".orange").style.border = "3px solid #a0a0a0";
  document.querySelector(".grey").style.border = "3px solid #a0a0a0";
  document.querySelector(".black").style.border = "3px solid #a0a0a0";
});

document.querySelector(".orange").addEventListener("click", function () {
  backgroundColor = "#dfa145";
  document.querySelector("body").style.backgroundColor = "#dfa145";
  document.querySelector(".orange").style.border = "5px solid #54c83a";
  document.querySelector(".green").style.border = "3px solid #a0a0a0";
  document.querySelector(".red").style.border = "3px solid #a0a0a0";
  document.querySelector(".blue").style.border = "3px solid #a0a0a0";
  document.querySelector(".yellow").style.border = "3px solid #a0a0a0";
  document.querySelector(".grey").style.border = "3px solid #a0a0a0";
  document.querySelector(".black").style.border = "3px solid #a0a0a0";
});

document.querySelector(".grey").addEventListener("click", function () {
  backgroundColor = "#b2b2b2";
  document.querySelector("body").style.backgroundColor = "#b2b2b2";
  document.querySelector(".grey").style.border = "5px solid #54c83a";
  document.querySelector(".green").style.border = "3px solid #a0a0a0";
  document.querySelector(".red").style.border = "3px solid #a0a0a0";
  document.querySelector(".blue").style.border = "3px solid #a0a0a0";
  document.querySelector(".yellow").style.border = "3px solid #a0a0a0";
  document.querySelector(".orange").style.border = "3px solid #a0a0a0";
  document.querySelector(".black").style.border = "3px solid #a0a0a0";
});

document.querySelector(".black").addEventListener("click", function () {
  backgroundColor = "black";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".black").style.border = "5px solid #54c83a";
  document.querySelector(".green").style.border = "3px solid #a0a0a0";
  document.querySelector(".red").style.border = "3px solid #a0a0a0";
  document.querySelector(".blue").style.border = "3px solid #a0a0a0";
  document.querySelector(".yellow").style.border = "3px solid #a0a0a0";
  document.querySelector(".orange").style.border = "3px solid #a0a0a0";
  document.querySelector(".grey").style.border = "3px solid #a0a0a0";
});

document.querySelector(".twelve").addEventListener("click", function () {
  multiplier = 12;
  document.querySelector(".twelve").style.border = "5px solid #54c83a";
  document.querySelector(".ten").style.border = "3px solid #a0a0a0";
  document.querySelector(".eleven").style.border = "3px solid #a0a0a0";
  document.querySelector(".thirteen").style.border = "3px solid #a0a0a0";
});

document.querySelector(".ten").addEventListener("click", function () {
  multiplier = 10;
  document.querySelector(".ten").style.border = "5px solid #54c83a";
  document.querySelector(".twelve").style.border = "3px solid #a0a0a0";
  document.querySelector(".eleven").style.border = "3px solid #a0a0a0";
  document.querySelector(".thirteen").style.border = "3px solid #a0a0a0";
});

document.querySelector(".eleven").addEventListener("click", function () {
  multiplier = 11;
  document.querySelector(".eleven").style.border = "5px solid #54c83a";
  document.querySelector(".twelve").style.border = "3px solid #a0a0a0";
  document.querySelector(".ten").style.border = "3px solid #a0a0a0";
  document.querySelector(".thirteen").style.border = "3px solid #a0a0a0";
});

document.querySelector(".thirteen").addEventListener("click", function () {
  multiplier = 13;
  document.querySelector(".thirteen").style.border = "5px solid #54c83a";
  document.querySelector(".twelve").style.border = "3px solid #a0a0a0";
  document.querySelector(".eleven").style.border = "3px solid #a0a0a0";
  document.querySelector(".ten").style.border = "3px solid #a0a0a0";
});

document.querySelector(".info").addEventListener("click", function () {
  document.querySelector(".modal-info").hidden = false;
  document.querySelector(".overlay-info").hidden = false;
});

document
  .querySelector(".close-modal-info")
  .addEventListener("click", function () {
    document.querySelector(".modal-info").hidden = true;
    document.querySelector(".overlay-info").hidden = true;
  });
