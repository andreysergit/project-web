'use strict';
const fetch = require('node-fetch');
const config = require('../telega/config.json');

const msg = 'Hello world';

(async () => {
  let url = `https://api.telegram.org/bot${config.token}/sendMessage?chat_id=${config.chat}&parse_mode=html&text=${msg}`;
  const options = {
    method: 'POST',
  };
  let response = await fetch(url, options);

  let commits = await response.json(); // читаем ответ в формате JSON
  // let text = await response.text();

  // console.log('in async text', text.slice(0, 400));
  console.log('in async json', commits);
})();