/* eslint-disable */

const ghpages = require('gh-pages');

ghpages.publish('out', {
  dotfiles: true,
  message: 'Deploy to Github Page',
  user: {
    name: 'Donatien NAMBININTSOA (Circle CI)',
    email: 'donatiennambinintsoa@gmail.com'
  }
}, (error, message) => {
  if (error) return console.error(error);
  console.log("🥳, We made it...", message);
});
