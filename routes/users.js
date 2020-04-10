/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
// const moment = require('moment');
// const express = require('express');
// const router = express.Router();
// const twilio = require('twilio');
// const countdown = require('countdown');

// const accountSid = 'AC4b79b3f410907e3f2d7794710e99eeb3';
// const authToken = '86a094798f5c0f3cd33cbe28c9186e01';
// const client = new twilio(accountSid, authToken);



// module.exports = (db) => {
//   router.post("/", (req, res) => {

//     let { firstName, lastName, phoneNumber } = req.body;
//     let randomNumber = Math.floor((Math.random() * 1000000) + 1);

//     client.messages.create({
//       body: `Thank you ${firstName} you order. Order number is ${randomNumber}`,
//       to: '+16476690083',  // Text this number
//       from: '+12898061064' // From a valid Twilio number
//     })
//       .then((message) => console.log(message.sid));
//     let orderItem = JSON.parse(req.body.orderItem)
//     let quantity = JSON.parse(req.body.quantity)
//     let foodArray = JSON.parse(req.body.foodArray)



//     db.query(`INSERT INTO users(first_name , last_name , phone_number)
//     VALUES('${firstName}','${lastName}', '${phoneNumber}');`)
//   })

//     .then(data => res.render('/orderSummary', {
//       orderItem,
//       quantity,
//       foodArray,
//       users,
//       randomNumber
//     })

//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });

//       }));
//   return router;
// };





const moment = require('moment');
const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const countdown = require('countdown');

const accountSid = 'AC4b79b3f410907e3f2d7794710e99eeb3';
const authToken = '86a094798f5c0f3cd33cbe28c9186e01';
const client = new twilio(accountSid, authToken);



module.exports = (db) => {
  router.post("/", (req, res) => {
    let randomNumber = Math.floor((Math.random() * 100000) + 1);
    let { firstName, lastName, phoneNumber } = req.body;
    setTimeout(function () {
      client.messages.create({
        body: `Hey ${firstName} order number is ${randomNumber} ready for pickup`,
        to: '+16476690083',  // Text this number
        from: '+12898061064' // From a valid Twilio number
      })
    }, 100000)
    client.messages.create({
      body: `Thank you ${firstName} for your order. Order number is ${randomNumber}`,
      to: '+16476690083',  // Text this number
      from: '+12898061064' // From a valid Twilio number
    })
      .then((message) => console.log(message.sid));


    let orderItem = JSON.parse(req.body.orderItem)
    let quantity = JSON.parse(req.body.quantity)
    let foodArray = JSON.parse(req.body.foodArray)
    db.query(`INSERT INTO users (first_name,last_name,phone_number)
    VALUES ('${firstName}','${lastName}','${phoneNumber}') RETURNING *;`)
      .then(data => {
        const users = data.rows;
        res.render('../views/orderSummary', {
          orderItem,
          quantity,
          foodArray,
          users,
          randomNumber

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






















































































































































































































































// var output;
//     for ( var j = 0; j < someArr.length ; j++ ) {
//          tVal = someArr[i];//some manipulation of someArr[i]
//          (function(val){
//            connection.query( "select id from someTable where someCol = ?",val, function(err, rows, fields) {
//                if ( err ) {
//                  console.log( err );
//                } else {
//                  output.push( rows[0].someVal );//push query output to this variable
//                }
//            });
//          })(tVal);
//     }