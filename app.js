const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let data = {
  data: [],
};

app.get("/messages", (req, res) => {
  res.json(data);
});

app.post("/messages", (req, res) => {
  let match = false;

  data.data.forEach((element) => {
    if (element.text === req.body.text) {
      match = true;
      element.count += 1;
    }
  });

  if (match === false) {
    data.data.push({ text: req.body.text, count: 1 });
  }

  res.end();
});

app.listen(8080, () => console.log("App is running on port: 8080"));
