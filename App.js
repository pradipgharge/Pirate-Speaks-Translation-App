var txtInput = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("server error !! Please try again after some time");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => {
                return response.json();
            }

        )
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

}
btnTranslate.addEventListener("click", clickHandler);