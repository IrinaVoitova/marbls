'use strict';

(() => {
  const variable = ['четный', 'нечетный'];
  let comp;
  const botAnswer = (arr) => {
    comp = arr[Math.floor(Math.random() * arr.length)];
    return comp;
  };

  const game = () => {
    const result = {
      userBall: 5,
      botBall: 5,
    };

    return function foo() {
      const foo3 = () => {
        if (result.userBall < 1) {
          alert(`Вы проиграли в нашей игре`);
          return;
        }
        if (result.botBall < 1) {
          alert(`Вы выиграли в нашей игре`);
          return;
        } else {
          foo();
        }
      };


      const foo4 = () => {
        let botMove;
        if (botMove === 'undefined') {
          foo3();
        }
        if (result.botBall < 1) {
          foo3();
        }
        const botBallVariable = [...Array(result.botBall)].map((x, i) => i + 1);
        console.log(botBallVariable);
        botMove = botAnswer(botBallVariable);
        console.log(botMove);
        const botMystery = prompt(`Я загадал число! Если угадаешь, четное оно, или нечетное, то получишь это количество шариков себе, если не угадаешь, то я заберу это количество шариков у тебя!
        Введи ответ: четное/нечетное.`, '');
        if (botMystery === null) {
          return;
        }
        if (botMystery !== 'четное' && botMystery !== 'нечетное') {
          alert(`Введен неверный ответ!
          Введи ответ: четное/нечетное.`);
          foo4();
        }
        if (botMystery === 'четное' && botMove % 2 === 0 ||
        botMystery === 'нечетное' && botMove % 2 !== 0) {
          alert(`Вы выиграли в этом раунде.
          Количество выигранных шариков: ${botMove} шт`);
          result.userBall += (botMove * 1);
          result.botBall -= botMove;

          if (result.botBall < 1) {
            foo3();
          } else {
            foo();
          }
        } else {
          alert(`Вы проиграли в этом раунде.
          Количество проигранных шариков: ${botMove} шт`);
          result.userBall -= botMove;
          result.botBall += (botMove * 1);
          // foo3();
          if (result.userBall < 1) {
            foo3();
          } else {
            foo();
          }
        }
      };
      const foo2 = () => {
        botAnswer(variable);
        console.log(comp);
        const userMystery = prompt(`
        Введите количество шариков, на которые вы играете.
        От 1 до ${result.userBall}`, '');
        if (userMystery === null) {
          return;
        }
        if (userMystery < 1 || userMystery > result.userBall || isNaN(userMystery)) {
          alert(`Введено неверное количество шариков`);
          foo2();
        }
        if (userMystery >= 1 && userMystery <= result.userBall) {
          if (comp === 'четный' && userMystery % 2 === 0 ||
          comp === 'нечетный' && userMystery % 2 !== 0) {
            result.userBall -= userMystery;
            result.botBall += (userMystery * 1);
            console.log(`${result.userBall} / ${result.botBall}`);
            alert(`Компьютер выиграл в этом раунде!
            Количество выигранных шариков: ${userMystery} шт`);
            if (result.userBall < 1) {
              foo3();
            } else {
              foo4();
            }
          } else {
            result.userBall += (userMystery * 1);
            result.botBall -= userMystery;
            console.log(`${result.userBall} / ${result.botBall}`);
            alert(`Вы выиграли в этом раунде!
            Количество выигранных шариков: ${userMystery} шт`);
            if (result.botBall < 1) {
              foo3();
            } else {
              foo4();
            }
          }
        }
      };
      foo2();
    };
  };
  window.marbls = game;
})();

