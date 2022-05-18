const { add, update } = require('./broadcaster');
const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.post('/api/add', (req, res) => {
  add(req.body);

  res.send({ success: true })
});

app.post('/api/update/:vin', (req, res) => {
  update({
    ...req.body,
    vin: req.params.vin,
  })

  console.log({
    ...req.body,
    vin: req.params.vin,
  })

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
