function updateCart() {
    var tbody = document.getElementById('cart-items');
    tbody.innerHTML = '';

    var container = document.getElementById('container');
    var products = container.getElementsByClassName('product');

    Array.from(products).forEach(function (product) {
        var radio = product.querySelector('.product-radio');
        var quantity = product.querySelector('input[type="number"]');

        if (radio.checked) {
            var name = product.querySelector('h3').textContent;
            var price = product.querySelector('p').textContent;

            var row = document.createElement('tr');
            var cell1 = document.createElement('td');
            var cell2 = document.createElement('td');
            var cell3 = document.createElement('td');
            cell1.textContent = name;
            cell2.textContent = price;
            cell3.textContent = quantity.value;
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);

            tbody.appendChild(row);
            tbody.appendChild(row);
        }
    });

}

document.addEventListener('DOMContentLoaded', function () {
    var radios = document.querySelectorAll('.product-radio');

    radios.forEach(function (radio) {
        radio.addEventListener('change', updateCart);
    });
});