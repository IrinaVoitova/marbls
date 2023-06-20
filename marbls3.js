'use strict';

(() => {
  const variable = ['четное', 'нечетное'];
  let randomAnswer;
  const botAnswer = (arr) => {
    randomAnswer = arr[Math.floor(Math.random() * arr.length)];
    return randomAnswer;
  };

  const marbls = () => {
    let result = {
      userBall: 5,
      botBall: 5,
    };

    return function foo() {
      const foo2 = () => {
        const foo5 = (x) => {
          const question = confirm('Ты хочешь завершить игру?');
          if (question !== true) {
            return x();
          } else {
            return;
          }
        };
        const foo11 = () => {
          const startOver = confirm('Сыграем еще разок?');
          if (startOver === true) {
            result = {
              userBall: 5,
              botBall: 5,
            };
            return foo();
          } else {
            return;
          }
        };
        let foo10;
        const foo3 = () => {
          if (result.userBall < 1) {
            alert(`Ты проиграл в нашей игре`);
            return foo11();
          }
          if (result.botBall < 1) {
            alert(`Ты выиграл в нашей игре`);
            return foo11();
          } else {
            return foo10();
          }
        };
        const foo4 = () => {
          let botMove;
          if (botMove === 'undefined') {
            return foo3();
          }
          if (result.botBall < 1) {
            return foo3();
          }
          const botBallVariable = [...Array(result.botBall)].map((x, i) => i + 1);
          console.log(botBallVariable);
          botMove = botAnswer(botBallVariable);
          console.log(botMove);
          const botMystery = prompt(`Я загадал число! 
          Если угадаешь, четное оно, или нечетное, 
          то получишь это количество шариков себе, если не угадаешь, 
          то я заберу это количество шариков у тебя!
          Введи ответ: четное/нечетное.`, '');
          if (botMystery === null) {
            return foo5(foo4);
          }
          if (botMystery !== 'четное' && botMystery !== 'нечетное') {
            alert(`Введен неверный ответ!
            Введи ответ: четное/нечетное.`);
            return foo4();
          }
          if (botMystery === 'четное' && botMove % 2 === 0 ||
          botMystery === 'нечетное' && botMove % 2 !== 0) {
            result.userBall += (botMove * 1);
            result.botBall -= botMove;
            alert(`Ты выиграл в этом раунде!
            Количество выигранных шариков: ${botMove} шт
            Твой ответ: ${botMystery}
            Ответ компьютера: ${botMove}`);
            if (result.botBall < 1) {
              return foo3();
            } else {
              return foo10();
            }
          } else {
            result.userBall -= botMove;
            result.botBall += (botMove * 1);
            alert(`Ты проиграл в этом раунде!
            Количество проигранных шариков: ${botMove} шт
            Твой ответ: ${botMystery}
            Ответ компьютера: ${botMove}`);
            if (result.userBall < 1) {
              return foo3();
            } else {
              return foo10();
            }
          }
        };
        foo10 = () => {
          botAnswer(variable);
          console.log(randomAnswer);
          const userMystery = prompt(`
          Введи количество шариков, на которые ты играешь.
          От 1 до ${result.userBall}!`, '');
          if (userMystery === null) {
            return foo5(foo10);
          }
          if (userMystery < 1 || userMystery > result.userBall || isNaN(userMystery)) {
            alert(`Введено неверное количество шариков`);
            return foo10();
          }
          if (userMystery >= 1 && userMystery <= result.userBall) {
            if (randomAnswer === 'четное' && userMystery % 2 === 0 ||
              randomAnswer === 'нечетное' && userMystery % 2 !== 0) {
              result.userBall -= userMystery;
              result.botBall += (userMystery * 1);
              console.log(`${result.userBall} / ${result.botBall}`);
              alert(`Ты проиграл в этом раунде!
                Количество проигранных шариков: ${userMystery} шт
                Твой ответ: ${userMystery}
                Ответ компьютера: ${randomAnswer}`);
              if (result.userBall < 1) {
                return foo3();
              } else {
                return foo4();
              }
            } else {
              result.userBall += (userMystery * 1);
              result.botBall -= userMystery;
              console.log(`${result.userBall} / ${result.botBall}`);
              alert(`Ты выиграл в этом раунде!
                Количество выигранных шариков: ${userMystery} шт
                Твой ответ: ${userMystery}
                Ответ компьютера: ${randomAnswer}`);
              if (result.botBall < 1) {
                return foo3();
              } else {
                return foo4();
              }
            }
          }
        };
        const game = () => {
          const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
          let comp;
          const getRandomIncInclusive = (arr) => {
            comp = arr[Math.floor(Math.random() * arr.length)];
            return comp;
          };
          getRandomIncInclusive(FIGURES_RUS);
          console.log(getRandomIncInclusive(FIGURES_RUS));
          let user = prompt('Камень, ножницы, бумага?', '');
          const foo7 = () => {
            const foo6 = () => {
              if (comp === user) {
                alert(`
      Компьютер: ${comp}
      Пользователь: ${user}
      Ничья`);
                return game();
              }
              if (user === ' ') {
                return game();
              }
              if (comp === FIGURES_RUS[0] && user === FIGURES_RUS[2] ||
      comp === FIGURES_RUS[1] && user === FIGURES_RUS[0] ||
      comp === FIGURES_RUS[2] && user === FIGURES_RUS[1]) {
                alert(`
      Компьютер: ${comp}
      Пользователь: ${user}
      Ты выиграл. Первый ход твой!`);
                return foo10();
              } else {
                alert(`
      Компьютер: ${comp}
      Пользователь: ${user}
      Первым будет ходить компьютер!`);
                return foo4();
              }
            };
            if (user === null) {
              return foo5(game);
            }
            const userAnswer = user.toLowerCase();
            if (userAnswer === '') {
              user = ' ';
              return foo6();
            }
            const check = userAnswer[0];
            if (check === 'к') {
              user = 'камень';
              return foo6();
            }
            if (check === 'н') {
              user = 'ножницы';
              return foo6();
            }
            if (check === 'б') {
              user = 'бумага';
              return foo6();
            } else {
              user = ' ';
              return foo6();
            }
          };
          foo7();
        };
        game();
      };
      foo2();
    };
  };
  window.marbls = marbls;
})();
