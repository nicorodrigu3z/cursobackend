const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use("/api", apiRouters);

app.use('*', (req, res) => {
    res.status(404).send('<h1> Page does not exist</h1>')
})


app.get("/", (req, res) => {
    res.send("<h1></h1>");
});

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});

