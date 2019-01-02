const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// basically says, look at the underlying env and see if
// there is a declared port. if not, use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
