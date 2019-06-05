const ghpages = require('gh-pages');
const path = require('path');

/** Directory */
ghpages.publish(path.resolve(__dirname, '/../.docz/dist'), {
  message: `[ci skip] deployment (${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}-${date.getUTCHours()}-${date.getUTCMinutes()})`,

  /** Branch */
  branch: 'gh-pages',
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/basarat/gls.git',

  user: {
    name: 'basarat',
    email: 'basaratali@gmail.com'
  }
}, (err) => {
  if (err) {
    console.log('--publish failed!--', err)
  } else {
    console.log('--publish done--');
  }
});