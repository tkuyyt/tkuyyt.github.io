
console.log(document.getElementById('input1').value);
console.log(document.getElementById('input2').value);
console.log(document.getElementById('input3').value);
console.log(document.getElementById('input4').value);

function sendData() {

    // 上傳的目標網址
    var data1 = "https://api.thingspeak.com/update?key=SCXJ13DO96U78IR5";
    var data2 = "&field1=" + document.getElementById('input1').value.toString()
        + "&field2=" + document.getElementById('input2').value.toString()
        + "&field3=" + document.getElementById('input3').value.toString()
        + "&field4=" + document.getElementById('input4').value.toString();

    var url = data1 + data2;

    // 發送 POST 請求
    fetch(url, {
        method: 'POST',
    })
}

// 每隔10秒發送一次請求
setInterval(sendData, 20000);