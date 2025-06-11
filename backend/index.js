const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Yadav Ji kaise hoo ?? Sab Badiya???');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});