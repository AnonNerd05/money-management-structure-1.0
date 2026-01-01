const express = require('express');
const fs = require('fs');
const cors = require('cors');


const app = express();
app.use(cors());


const file = 'visits.json';


app.get('/visit', (req, res) => {
let data = { visits: 0 };
if (fs.existsSync(file)) {
data = JSON.parse(fs.readFileSync(file));
}
data.visits += 1;
fs.writeFileSync(file, JSON.stringify(data));
res.send(data);
});


app.listen(3000, () => console.log('Server running on port 3000'));