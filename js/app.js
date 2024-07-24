var txtCopy = null;

document.querySelector('.primary-button').addEventListener('click', () => {
    const inputText = document.querySelector('textarea').value;

    if (inputText.length == 0) {
        return;
    }

    try {
        validateInput(inputText);
    }
    catch (error) {
        return;
    }

    const noMessageDiv = document.querySelector('.no-message-container');
    const messageDiv = document.querySelector('.output-container');

    noMessageDiv.classList.remove('enabled');
    noMessageDiv.classList.add('disabled');

    messageDiv.classList.remove('disabled');
    messageDiv.classList.add('enabled');

    const encryptedText = encryptText(inputText);

    const cryptoInput = document.querySelector('.crypto-output-p');
    cryptoInput.innerHTML = encryptedText;
    txtCopy = cryptoInput;
});

document.querySelector('.secondary-button').addEventListener('click', () => {
    const inputText = document.querySelector('textarea').value;

    if (inputText.length == 0) {
        return;
    }

    try {
        validateInput(inputText);
    }
    catch (error) {
        return;
    }

    const noMessageDiv = document.querySelector('.no-message-container');
    const messageDiv = document.querySelector('.output-container');

    noMessageDiv.classList.remove('enabled');
    noMessageDiv.classList.add('disabled');

    messageDiv.classList.remove('disabled');
    messageDiv.classList.add('enabled');

    const decryptedText = decryptText(inputText);

    const cryptoInput = document.querySelector('.crypto-output-p');
    cryptoInput.innerHTML = decryptedText;

    txtCopy = cryptoInput;
});

document.querySelector('.button-copy').addEventListener('click', () => {
     
    navigator.clipboard.writeText(txtCopy.innerText)
        .then(() => alert('texto copiado para a área de transferência!'))
        .catch(err => alert('erro ao copiar texto: ' + err));
});

function encryptText(inputText) {
    return inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(encryptedText) {
    return encryptedText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validateInput(inputText) {
    if (hasNumber(inputText)) {
        alert("Somente letras minúsculas e sem acento");
        throw new Error;
    }
    if (/[A-Z]/.test(inputText)) {
        alert("Somente letras minúsculas e sem acento");
        throw new Error;
    }
}

function hasNumber(inputText) {
    return /\d/.test(inputText);
}