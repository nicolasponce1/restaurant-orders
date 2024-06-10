// scripts.js

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tableNumber = document.getElementById('tableNumber').value;
    const item1 = document.getElementById('item1').value;
    const item2 = document.getElementById('item2').value;
  
    const items = [{ name: item1, price: 10, quantity: 1 }, { name: item2, price: 15, quantity: 1 }];
  
    const data = {
      tableNumber: tableNumber,
      items: items
    };
  
    fetch('/orders/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('message').innerHTML = data;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      document.getElementById('message').innerHTML = 'Error creating order';
    });
  });
  