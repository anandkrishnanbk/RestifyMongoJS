var restify=require('restify');
var mongojs=require('mongojs');

var db =mongojs('productdb',['products']);

var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
//setup cors
restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');
server.use(restify.CORS());

server.listen(3002,function()
{
    console.log('server started %s',server.url);
});
server.get('/products', function (req, res, next) {
    db.products.find(function(err,products){
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(products));
    });
    //res.send("You will see all the products in the colection with this end point");
    next();
});
server.get('/products/:id',function(req,res,next)
{
    db.products.findOne({id:req.params.id},function(err,data)
    {
        res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
        res.end(JSON.stringify(data));

    });
    next();
});
server.post('/products',function(req,res,next){

    var product = req.params;
    db.products.save(product,function(err,data)
    {
        res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
        res.end(JSON.stringify(data));

    });
    next();

});
server.put('/products/:id/:lastName',function(req,res,next)
{
     var id=req.params.id;
     var lastName=req.params.lastName;
     db.products.update({id:id},{$set:{last_name:lastName}},function(err,data)
     {
         res.writeHead(200,{'Content-Type':'application/json,charset=utf-8'});
         res.end(JSON.stringify(data));
     });
    next();
});
server.del('/products/:id',function(req,res,next)
{
    db.products.remove({id:req.params.id},function(err,data)
    {
        if(!err)
        {
            res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
            res.end(JSON.stringify(true));
        }
        else
        {
            console.log('err-'+err);
        }

    });
    next();

});