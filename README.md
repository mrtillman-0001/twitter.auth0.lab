# auth0.lab

https://auth0.com

https://auth0.com/docs/quickstart/webapp/nodejs

https://auth0.com/docs/tokens/refresh-tokens/get-refresh-tokens

# Login

To log in visit http://localhost:8082/auth/login.

You will be redirected to Auth0. Sign in using your AvatarBox credentials.

![auth-wall](https://s3.amazonaws.com/docs.avatarbox.io/auth0.png)

The third-party application will receive a response:

```json
{
   "displayName":"",
   "id":"auth0|1615194099768",
   "user_id":"auth0|1615194099768",
   "provider":"auth0",
   "name":{
      
   },
   "picture":"https://cdn.auth0.com/avatars/default.png",
   "nickname":"",
   "_json":{
      "sub":"auth0|1615194099768",
      "nickname":"",
      "name":"",
      "picture":"https://cdn.auth0.com/avatars/default.png",
      "updated_at":"2021-04-15T22:44:27.868Z"
   },
   "_raw":"{\"sub\":\"auth0|1615194099768\", ... }"
}
```