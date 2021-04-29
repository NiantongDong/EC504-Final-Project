# Deploy this web

Make sure you have the latest version of Nodejs and npm. To check the version, run these line.

```
node –v
npm -v
```

Then, we need to install every dependencies for our project. To do so, run

```
npm install
```

After that, you can deploy this web on the localhost. To change the port, go to the server.js

```javascript
app.listen(3000, () => { //Change 3000 to any port number you want
  console.log("The server is up and running!");
});
```

Then, run

```
npm start
```

