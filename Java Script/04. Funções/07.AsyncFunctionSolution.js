function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

async function doSomenthingThatNeedsTime() {
  await delay();
  return {
    status: 200,
  };
}

(async () => {
  const resultado = await doSomenthingThatNeedsTime();
  console.log(resultado);
})();