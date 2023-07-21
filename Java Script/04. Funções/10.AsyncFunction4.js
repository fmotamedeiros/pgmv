function doSomenthingThatNeedsTime() {
    return new Promise((resolve, reject) => {
      try {
        //throw new Error('Deu bronca..');
        setTimeout(() => resolve({ code: 200 }), 3000);
      } catch {
        setTimeout(() => reject({ code: 501 }), 3000);
      }
    });
  }
  
  function doSomenthingThatNeedsTimeWrong() {
      return new Promise((resolve, reject) => {
        try {
          throw new Error('Erro..');
        } catch {
          setTimeout(() => reject({ code: 501 }), 3000);
        }
      });
    }
  
  const task1 = doSomenthingThatNeedsTime();
  const task2 = doSomenthingThatNeedsTimeWrong();
  const task3 = doSomenthingThatNeedsTime();
  
  Promise.allSettled([task1, task2, task3])
  .then((resultado) => {
      console.log(resultado);
  });
  