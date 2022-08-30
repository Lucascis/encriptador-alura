function clearText() {
    document.getElementById("textInput").value = "";
}

function copyToClipboard() {
    let copyText = document.getElementById("textOutput").value;
    navigator.clipboard.writeText(copyText);
    clearText();
}

function copyButton() {
    let button = document.createElement("button");
    button.innerHTML = "Copiar";
    button.setAttribute("onclick", "copyToClipboard()");
    button.setAttribute("id", "copyButton");
    document.getElementById("rightPanel").appendChild(button);
}

function textOutput() {
    let textArea = document.createElement("textarea");
    textArea.setAttribute("id", "textOutput");
    document.getElementById("rightPanel").appendChild(textArea);
}

function result() {
    document.getElementById("rightPanel").innerHTML = "";
    textOutput();
    copyButton();
}

function validateText() {
    let textInput = document.getElementById("textInput").value;
    let regex = /[A-ZÀ-ÿ]/
    if (textInput.match(regex)) {
        document.getElementById("alertIcon").style.display = "inline-block";
        let alert = document.createElement("p");
        alert.setAttribute("class", "alert");
        alert.innerHTML = "";
        document.getElementById("alerta").appendChild(alert);
        return true;
    } else {
        return false;
    }
}

function encriptar() {
    let toReplace = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };
    let text = document.getElementById("textInput").value;

    if (text == "") {
        window.location.reload();
    } else if (!validateText()) {
        let textoEncriptado = text.replace(/[aeiou]/g, x => toReplace[x]);

        clearText();
        result();
        document.getElementById("textOutput").value = textoEncriptado;
    }

}

function desencriptar() {
    let toReplace = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    };
    let text = document.getElementById("textInput").value;

    if (text == "") {
        window.location.reload();
    } else {
        let textoDesencriptado = text.replace(/enter|imes|ai|ai|ober|ufat/g, x => toReplace[x]);

        clearText();
        result();
        document.getElementById("textOutput").value = textoDesencriptado;
    }
}