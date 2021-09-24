const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const corsOptions = { origin: "*", credentials: true };
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.post("/", async function (req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: "nodemailertest54@gmail.com",
      pass: "nodemailer",
    },
    port: 587,
    secure: false,
    from: "test test <nodemailertest54@gmail.com>",
  });

  let info = await transporter.sendMail({
    to: "volodymyrholodivskyi@gmail.com, nodemailertest54@gmail.com",
    subject: "Hello ✔",
    text: JSON.stringify(req.body),
  });

  console.log("Message sent: %s", info.messageId);

  return res.send("Order received");
});

app.listen(3000, () => {
  console.log(`Listen on port 3000`);
});
