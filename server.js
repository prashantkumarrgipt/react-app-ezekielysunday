const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 8000;
app.use(express.static(publicPath));

if(process.env.NODE_ENV === 'production')
{
    app.use('/' , express.static('my-app/build'))

    app.get('*' , (req,res)=>{

        res.sendFile(path.resolve(__dirname , 'my-app/build/index.html'))

    })


}

app.listen(port, () => {
   console.log('Server is up!');
});