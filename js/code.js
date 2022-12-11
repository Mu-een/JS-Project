// sample data
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        image:"https://i.postimg.cc/tC9Fzw88/pennyblackout.jpg",
        productName: "Penny Blackout",
        type:"Penny",
        price:"R1200.00",
    },
    {
        id: 2,
        image:"https://i.postimg.cc/vZk3znC4/birdhouseskateboard-stage-3.jpg",
        productName: "BIRDHOUSE Stage 3",
        type:"Skateboard",
        price:"R1300.00",
    },
    {
        id: 3,
        image:"https://i.postimg.cc/KYMgqjR0/Sector-9-Fault-Line-Curl-39-5-Longboard-Complete-356967-front-US-1.webp",
        productName: "Sector 9 Fault Line Curl ",
        type:"Longboard",
        price:"R3500.00",
    },
    {
        id: 4,
        image:"https://i.postimg.cc/NFdhr1vF/7-25-Skull-Mini-Blue-teste.png",
        productName: "BIRDHOUSE Tony Hawk Oversized Skull Mini ",
        type:"Skateboard",
        price:"R1300.00",
    },
    {
        id: 5,
        image:"https://i.postimg.cc/JzMQbzRD/elementboard.png",
        productName: "Element Section",
        type:"Skateboard",
        price:"R1300.00",
    },
    {
        id: 6,
        image:"https://i.postimg.cc/jdfY9Z00/s9-bambino-shorebreak.jpg",
        productName: "Sector 9 Bambino Shorebreak ",
        type:"Longboard",
        price:"R2500.00",
    }
];

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

//when pressing 'buy' button
function buyButton (){
    alert("Added to Checkout!")
}

// local storage
localStorage.setItem('products',JSON.stringify(products));
localStorage.getItem('products')

// filter buttons
// show all filter
function filterAll(){
    return localStorage.getItem('products');
}
document.querySelector('#allButton').addEventListener('click',filterAll);

// penny filter
function filterPenny(){
    let thePenny = products.filter(products => products.type('Penny'));
    return thePenny
}
document.querySelector('#filterButtonPenny').addEventListener('click',filterPenny);