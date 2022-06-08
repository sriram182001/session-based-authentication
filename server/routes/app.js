const controllers = require('../controllers');

const routes=['/','/signup','/signin','/Mspc','/{any*}']
module.exports = [
    ...routes.map(route=>({
        method:'GET',
        path:route,
        config:{
            handler:controllers.app.app,
            auth:false
        }
    })),
    {
        method:'POST',
        path:'/api/storedata',
        config:{
            handler:controllers.signup.SignUp,
            auth:false
            
        }
            
    },
    {
        method:'POST',
        path:'/api/login',
        config:{
            handler:controllers.login.LogIn,
            auth:{mode:'try',strategy:'session'}
        }
    },
    {
        method:'GET',
        path:'/api/logout',
        config:{
            handler:controllers.logout.LogOut
            ,auth:{mode:'required',strategy:'session'}
        }

    },
    {
        method:'GET',
        path:'/api/authenticate',
        config:{
            handler:controllers.authenticate.Authenticate,
            auth:{mode:'try',strategy:'session'}
        }

    },
   {
        method:'GET',
        path:'/api/getdetails',
        config:{
            handler:controllers.getdetails.GetDetails,
            auth:{mode:'required',strategy:'session'}
        }
   }]