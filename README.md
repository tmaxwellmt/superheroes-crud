It's nice to update our .gitignore before our first commit

set up GitHub: create new repository
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/pastrybot/superheroes_crud.git
git push -u origin master

Create README.md, server.js,
Create package.json: type `npm init` on the command line. Answer questions..then VOILA!
`NPM install --save express`//now we have our node modules
require express into our server.js file
then add this
```var app = express();
var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});```
and test our api before comitting via `app.METHOD('URL LOCATION', function(req, res))`
Run your test through postman via your test route
