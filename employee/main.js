console.log(customers);
let container = document.getElementById('directory');
let results = customers.results;

let output = "";
for (var i = 0; i < results.length; i++){
      output += `<div>`;
      output += `<img src=${results[i].picture.large}>`;
      output += `<h2>${results[i].name.first} ${results[i].name.last} </h2>`;
      output += `<p class="line">_____________________</p>`;
      output += `<p class="email">${results[i].email}</p>`;
      output += `<p class="street">${results[i].location.street}</p>`;
      output += `<p class="city">${results[i].location.city}, ${results[i].location.state}, ${results[i].location.postcode}</p>`;
      output += `<p class="phone">${results[i].phone}</p>`;
      output += `<p class="value">${results[i].id.value}</p></div>`;
};
container.innerHTML = output;
