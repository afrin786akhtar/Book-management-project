const express = require('express');
const route = require('./routes/route.js');
const  mongoose  = require('mongoose');
const app = express();

app.use(express.json());


mongoose.connect("mongodb+srv://group45Database:LluRUzY3qvGKUVwo@project-3.hwz6k4u.mongodb.net/group45Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

//----------wrong api edge case--------------------------------------------
// app.use((req, res, next) => {
//     res.status(400).send({ status: false, error: "URL is wrong" });
// })

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
