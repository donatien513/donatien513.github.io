/* eslint-disable */

const ghpages = require('gh-pages');

ghpages.publish('dist', {
  dotfiles: true,
  message: 'Deploy to Github Page',
  user: {
    name: 'Donatien NAMBININTSOA (Circle CI)',
    email: 'donatiennambinintsoa@gmail.com'
  }
}, () => {
  console.log("🥳, We made it...");
});
