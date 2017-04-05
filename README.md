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

We defined a mongoose schema in the file models/superhero
A schema is like a blueprint, it defines what all future heroes will look like. It will be a constructor funtion we will use to actually make new superheroes.

install ejs - npm install --save ejs

pics:
https://s-media-cache-ak0.pinimg.com/736x/ff/2e/54/ff2e54f2ca5c09a877fb04d84bc562a4.jpg

http://weknowyourdreams.com/image.php?pic=/images/unicorn/unicorn-04.jpg

https://img.memesuper.com/91083df7612bfce4e3f22a0ff3e1cf56_unicorn-meme-brasil-pesquisa-funny-memes-unicorn_500-375.jpeg

http://funnyasduck.net/wp-content/uploads/2013/01/funny-robocop-unicorn-spoof-movie-poster-pics.jpg

http://www.shockya.com/news/wp-content/uploads/keanu-movie-poster-oscar-parody-04.jpg

http://g03.a.alicdn.com/kf/HTB16xLHJVXXXXaCXVXXq6xXFXXXu/Free-shipping-Funny-Unicorn-Inflatable-Costume.jpg
