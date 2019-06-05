const ghpages = require('gh-pages');
const path = require('path');
const date = new Date();

/** Directory */
const directory = path.resolve(__dirname, '/../.docz/dist');
console.log(__dirname, path.resolve(__dirname,'/..'));

/** Branch */
const branch = 'gh-pages';

/** Repo */
const repo = 'https://' + process.env.GH_TOKEN + '@github.com/basarat/gls.git';

ghpages.publish(directory, {
  message: `[ci skip] deployment (${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}-${date.getUTCHours()}-${date.getUTCMinutes()})`,
  branch: branch,
  repo: repo,
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