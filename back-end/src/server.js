import express from 'express';
const app = express();
const articleInfo =[{name:'learn-react',upvotes: 0,comments:[]},
                {name:'learn-node',upvotes:0,comments:[] },
               {name:'learn-vuejs',upvotes:0,comments:[] }
              ]

app.use(express.json());

app.post('/api/articles/:name/upvote',(req,res) => {
const article = articleInfo.find(a => a.name === req.params.name);
article.upvotes += 1;
res.json(article);
//res.send ('Success! The article ' + req.params.name + 'now has' + article.upvotes + 'upvotes!');
})
app.post('/api/articles/:name/comments',(req,res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = articleInfo.find(a => a.name === name);
   article.comments.push({
  postedBy,
  text
});
 res.json(article);
 });
// res.send ('Success! The article ' + req.params.name + 'now has' + article.upvotes + 'upvotes!' + article.comments +'comments');
//console.log(data);

//app.get('/hello',function(req,res){
  //  res.send('HEllo!! from GET end Point');
//});
//app.get('/hello/:name',function(req,res){
  //  res.send('HEllo!! from GET end Point' + req.params.name);
//});
//app.post('/hello',function(req,res){
  //  res.send('HELLO!! ' + req.body.name +' FRom a POST Endpoint..');
//})

app.get('/api/health',(req,res) => {
//const article = articleInfo.find(a => a.name === req.params.name);
//article.upvotes += 1;
res.json("response:sucess");
//res.send ('Success! The article ' + req.params.name + 'now has' + article.upvotes + 'upvotes!');
})

app.listen(8000,function(){
    console.log('server is listening on port 8000');
});