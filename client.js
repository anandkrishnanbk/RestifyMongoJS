/**
 *Restify JSON client ffor testing purposes to check sample request responses for get,post,put,delete
 * @type {*|exports|module.exports}
 */
var restify=require('restify');
var server=require('./server');

var client =restify.createJSONClient({url:'http://localhost:3000'});

var testProducts = {"id" : "105", "gender" : "Female", "first_name" : "Nandana",
    "last_name" : "Soman", "email" : "nandana@gmail.com",
    "ip_address" : "255.45.255.45" };

client.post('/products',testProducts,function(err,req,resp,product)
{
    if(err)
    {
       console.log('error occured'+err);
    }
    else{

        console.log('product saved-'+product.email);
    }
});
client.get('/products', function (err, req, res, products)
{
    if (err) {
        console.log('get-error occured-'+err);
    } else {
        //console.log("Total products " + products.length);
        //console.log('All products >>>>>>>');
        //console.log(products);
    }
});
client.put('/products/109/Geeta',function(err,req,res,status)
{
    if(err)
    {
        console.log('put-err occured-'+err);
    }
    else
    {
        console.log('put status-'+status);
    }


});
client.del('/products/101',function(err,req,res,status)
{
    if(err)
    {
        console.log('del-err occured-'+err);
    }else
    {
        console.log("del status-"+status);
    }

});

client.get('/products/105',function(err,req,res,data)
{
    if(err)
    {
       console.log('get one err-'+err);
    }
    else
    {
        console.log('get one status-'+data.first_name);

    }


});

module.exports= server;
