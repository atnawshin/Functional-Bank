function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = ''; //value read kore ekta variable e rakhar por reset korte hoy
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}