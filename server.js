var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
        'article-one':
               {
                        title:'Article One | Priya',
                        heading:'Article One',
                        date:'oct 5,2016',
                        content:`<p>This is my First Article. This is my First Article.This is my First Article.
                               This is my First Article.This is my First Article.This is my First Article.
                             </p>
                             <p>
                                This is my First Article. This is my First Article.This is my First Article.
                                This is my First Article.This is my First Article.This is my First Article.
                             </p>
                             <p>
                                This is my First Article. This is my First Article.This is my First Article.
                                This is my First Article.This is my First Article.This is my First Article.
                             </p>`
                },
        'article-two':
               {
                        title:'Article Two | Priya',
                        heading:'Article Two',
                        date:'oct 8,2016',
                        content:`<p>This is my Second Article. 
                             </p>`
                },
        'article-three':
               {  title:'Article Three | Priya',
                        heading:'Article Three',
                        date:'oct 15,2016',
                        content:`<p>This is my Third Article. 
                             </p>`
               }
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate=`
    <html>
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
       </head>  
  <body>
      <div class="container">
             <div>
               <a href="/">Home</a>
             </div>
             <hr/>
              <h3>
                  ${heading}
              </h3>
                  <div>
                       ${date}
                  </div>
                          <div>
                            ${content}
                          </div>
      </div>
  </body>
  </html>`;
  return htmlTemplate;
  }  
    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res)
{
    //articlename=article-one;
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
