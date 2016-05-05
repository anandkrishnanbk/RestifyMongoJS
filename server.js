var restify = require('restify');
var mongojs = require('mongojs');

var db = mongojs('productdb', ['products']);

var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');
restify.CORS.ALLOW_HEADERS.push('Access-Control-Allow-Methods');
server.use(restify.CORS());

server.get('/products', function (req, res, next) {
    db.products.find(function (err, products) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(products));
    });
    //res.send("You will see all the products in the colection with this end point");
    next();
});
server.get('/products/:id', function (req, res, next) {
    db.products.findOne({id: req.params.id}, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8'
        });
        res.end(JSON.stringify(data));

    });
    next();
});
server.post('/products/:id', function (req, res, next) {

    var product = req.body;
    /*console.log("params-"+req.params);
    console.log("body-"+req.body);*/
   /* var testProducts = {"id" : "105", "gender" : "Female", "first_name" : "Nandana",
        "last_name" : "Soman", "email" : "nandana@gmail.com",
        "ip_address" : "255.45.255.45" };
    console.log(JSON.stringify(product));
    console.log(JSON.stringify(testProducts));*/
    db.products.save(product, function (err, data) {
        res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
        res.end(JSON.stringify(data));

    });
    next();

});
server.put('/products/:id/:lastName', function (req, res, next) {
    var id = req.params.id;
    var lastName = req.params.lastName;
    db.products.update({id: id}, {$set: {last_name: lastName}}, function (err, data) {
        res.writeHead(200, {'Content-Type': 'application/json,charset=utf-8'});
        res.end(JSON.stringify(data));
    });
    next();
});
server.del('/products/:id', function (req, res, next) {
    db.products.remove({id: req.params.id}, function (err, data) {
        if (!err) {
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
            res.end(JSON.stringify(true));
        }
        else {
            console.log('err-' + err);
        }

    });
    next();

});

server.listen(3004, function () {
    console.log('server started %s', server.url);
});