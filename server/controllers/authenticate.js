module.exports.Authenticate=(request,reply)=>{
   if(request.auth.isAuthenticated)
   reply('ok').code(200);
   else
   reply('not valid').code(401);
}