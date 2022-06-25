//event listener for input in the form
//event listener for button
//typin -> enter/press button -> pop-up

var sauce = document.getElementById("sauce");
var summit = document.getElementById("search");

//
function incogTrigger(){
    var sauce = parseInt(document.getElementById("sauce").value);
    chrome.windows.create({"url": `https://nhentai.net/g/${sauce}`, "incognito": true})
}

//Click the button -> submit
summit.onclick = function(){
    incogTrigger()
};

//Press enter for search
sauce.addEventListener('keyup', function(event){
        if (event.code === 'Enter') {
            incogTrigger()
        }
    }
)