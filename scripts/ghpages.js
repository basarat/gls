const ghpages = require('gh-pages');
const path = require('path');
const date = new Date();

/** Directory */
const directory = '.docz/dist';

/** Repo */
const repo = 'basarat/gls';

/** Branch */
const branch = 'gh-pages';


ghpages.publish(path.resolve(__dirname, '..', directory), {
  message: `[ci skip] deployment (${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}-${date.getUTCHours()}-${date.getUTCMinutes()})`,
  branch: branch,
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/' + repo + '.git',
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
