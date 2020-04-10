$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
  const getMenu = require(getMenu);

  const createMenuItem = function () {
    return `<div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">${items.name}</h4>
        </div>
        <div class="card-body">
          <img height = '100px' width = '100px' src ='https://www.pcrm.org/sites/default/files/batatas-fritas-6.jpg' alt='fries'>
          <h1 class="card-title pricing-card-title">$7</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Organic grown potatoes</li>
            <li>Seasoned lightly</li>
            <li>Crispy or soft</li>
          </ul>
          <p>Quantity</p>
          <input name ="Sweet Potatoe Fries" type='number' min ='0' placeholder="0">
        </div>`
  }




// });

// const addMenuItem = function() =>{
//   return db.query(`
//   INSERT INTO menu_items(

//   )
// , [menu_item.]
// .then(res => res.rows[0])

// }
