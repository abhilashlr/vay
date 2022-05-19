const { add, update, remove } = require('./broadcaster');
const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.post('/api/vehicles', (req, res) => {
  add(req.body);

  res.send({ success: true })
});

app.put('/api/vehicles/:vin', (req, res) => {
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

app.delete('/api/vehicles/:vin', (req, res) => {
  remove(req.params.vin)

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
