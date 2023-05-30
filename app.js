
window.addEventListener('DOMContentLoaded', function () {
    setDefaultValue('input1', 20);
    setDefaultValue('input2', 60);
    setDefaultValue('input3', 5);
    setDefaultValue('input4', 1);
});

function setDefaultValue(inputId, defaultValue) {
    var inputElement = document.getElementById(inputId);
    inputElement.value = defaultValue;
}

function adjustValue(inputId, value) {
    var inputElement = document.getElementById(inputId);

    // 取得原始值
    var originalValue = parseInt(inputElement.value);

    // 調整值
    var adjustedValue = originalValue + value;

    // 更新輸入框的值
    inputElement.value = adjustedValue;
}

