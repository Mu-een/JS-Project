// sample data
let products = JSON.parse(localStorage.getItem('products')) 

// admin table
function tableProducts () {
    products.forEach((products)=>{
        document.querySelector('.tbody').innerHTML += `
        <tr id="tr">
            <td class="id">${products.id}</td>
            <td>${products.productName}</td>
            <td>${products.type}</td>
            <td>${products.price}</td>
            <td><button type="button" id="editButton" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal1">Edit</button></td>
            <td><button class="w-75 del-btn" id="deleteBtn" onclick="deleteRow(this)">Delete</button></td>
        </tr>`
    })
}
tableProducts();

// delete row in table
function deleteRow(){
    document.getElementById('tbody').deleteRow(0)
}

// sort button


// add button
function addRow(){
    let productNameSkate = document.querySelector('#product_input').value;
    let img = document.querySelector('#img_input').value;
    let typeSkate = document.querySelector('#type_input').value;
    let priceSkate = document.querySelector('#price_input').value;

    products.push(
        {
            id:products.length + 1,
            img, 
            productNameSkate, 
            typeSkate,
            priceSkate
        }
    )
    localStorage.setItem('products',JSON.stringify(products));
    display();
    location.reload();
}
document.querySelector("#addButton").addEventListener('click', addRow);