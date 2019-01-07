const main = async () => {
  log('------ start -------');
  await Promise.all([
    sleep(1),
    sleep(2),
    (async () => sleep(3))(),
    (async () => {
      await sleep(4);
    })(),
    () => sleep(5), // NOT Working
    async () => sleep(6), // NOT Working
    sleep(7),
  ]);
  log('------ done ------');
};

const sleep = (sec: number) => {
  const uuid = Date().now;
  log(uuid, `⏳ I waiting for ${sec}sec.`);
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      log(uuid, `🙆 I finished waiting. ${sec}sec.`);
      resolve(sec);
    }, sec * 1000);
  });
};

const log = (msg1: string = '', msg2: string = '') => {
  const el = document.querySelector('#app');
  el.innerText = `${el.innerText}\n${msg1} ${msg2}`;
};

main();
