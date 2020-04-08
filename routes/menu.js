const express = require('express');
const router = express.Router();
const twilio = require('twilio')

const accountSid = 'AC4b79b3f410907e3f2d7794710e99eeb3';
const authToken = '86a094798f5c0f3cd33cbe28c9186e01';
const client = new twilio(accountSid, authToken);
 //   client.messages.create({
      //     body: 'Hello from Node',
      //     to: '+16476690083',  // Text this number
      //     from: '+12898061064' // From a valid Twilio number
      // })
      // .then((message) => console.log(message.sid));
module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('hey')
    db.query(`SELECT * FROM items;`)
      .then(data => {
        const items = data.rows;
        let userData = req.body
        let foodArray = [];

        for (let item in userData) {
             if (userData[item] !== '') {
            foodArray.push({ name: item, quantity: Number(userData[item]) })
          };
        }
        //console.log(foodArray)
        let orderItem = []
        for (let i = 0; i < items.length; i++) {
          for (let j = 0; j < foodArray.length; j++) {
            if (foodArray[j].name == items[i].id) {
              orderItem.push(items[i])
            }
          }
        }
        let quantity = 0
        for (let b = 0; b < foodArray.length; b++) {
          quantity += foodArray[b].quantity

        }res.render('../views/checkout', {
          orderItem,
          quantity,
          foodArray
       
        });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};



