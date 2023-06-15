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



let deferredPrompt; // 宣告 deferredPrompt 變數

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    showAddToHomeScreenButton(); // 在 beforeinstallprompt 事件觸發時顯示按鈕
});

// 使用者互動事件觸發 A2HS 提示
document.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt.');
                } else {
                    console.log('User dismissed the A2HS prompt.');
                }
                deferredPrompt = null;
            });
        //deferredPrompt = null;
    }
});

// 假設您有一個「安裝」按鈕元素
const installButton = document.getElementById('a2hs-button');

// 監聽「安裝」按鈕的點擊事件，觸發安裝提示
installButton.addEventListener('click', () => {
  // 檢查是否存在 `beforeinstallprompt` 事件
  if (window.beforeinstallprompt) {
    // 觸發安裝提示
    window.beforeinstallprompt.prompt();
  }
});

// 顯示浮動按鈕
function showAddToHomeScreenButton() {
    const floatButton = document.getElementById('a2hs-button');
    floatButton.style.display = 'block';

   /* floatButton.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt.');
                } else {
                    console.log('User dismissed the A2HS prompt.');
                }
                deferredPrompt = null;
            });
        }
    });*/
}
