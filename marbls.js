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
      botAnswer(variable);
      console.log(comp);
      const userAnswer = prompt(`Введите количество шариков, на которые вы играете. От 1 до ${result.userBall}`, '');
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
      const foo2 = () => {
        if (userAnswer === null) {
          return;
        }
        if (userAnswer < 1 || userAnswer > result.userBall || isNaN(userAnswer)) {
          alert(`Введено неверное количество шариков`);
          foo3();
        }
        if (userAnswer >= 1 && userAnswer <= result.userBall) {
          if (comp === 'четный' && userAnswer % 2 === 0 ||
          comp === 'нечетный' && userAnswer % 2 !== 0) {
            result.userBall -= userAnswer;
            result.botBall += (userAnswer * 1);
            console.log(`${result.userBall} / ${result.botBall}`);
            alert(`Компьютер выиграл в этом раунде!
            Количество выигранных шариков: ${userAnswer} шт`);
            foo3();
          } else {
            result.userBall += (userAnswer * 1);
            result.botBall -= userAnswer;
            console.log(`${result.userBall} / ${result.botBall}`);
            alert(`Вы выиграли в этом раунде!
            Количество выигранных шариков: ${userAnswer} шт`);
            foo3();
          }
        }
      };
      foo2();
    };
  };
  window.marbls = game;
})();

