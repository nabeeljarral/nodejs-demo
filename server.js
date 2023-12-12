
'use strict';
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app= express();
app.get('/', (reg, res) => {
  res.send('Hello world');
}
);

app.listen(PORT, Host, () => {
   console.log('Running on http://${HOST}:${PORT}');
  
});
