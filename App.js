var txtInput = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-text");

btnTranslate.addEventListener("click", clickHandler);

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