import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
    //console.log(req.rawHeaders);
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is a paragraph about us.</p>');
});
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>You can contact us at contact@example.com.</p>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

