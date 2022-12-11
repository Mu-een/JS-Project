let products = JSON.parse(localStorage.getItem('products')) 

function sampleData () {
    products.forEach((products)=>{
        document.querySelector('.products').innerHTML += `
        <div class="card text-center" style="width: 18rem;">
  <img src="${products.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${products.productName}</h5>
    <p class="card-text text-center">Type: ${products.type}</p>
    <p class="card-text text-center">${products.price}</p>
    <button class="w-50 buy-btn" onclick="buyButton()">Buy</button>
  </div>
</div>`
    })
}
sampleData();
