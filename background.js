//We got a lot to talk about this 
// - Flow: Highlight -> left click -> choose the option "Search with Nhentai" -> Pop-up
// - The contextMenus is the keywork for looking for choosing options in the right click list.



//Create the context menu 
var contextMenuItem = {
    "id": "searchN",
    "title": "Search with Nhentai", 
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

//Add event for the context menu
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "searchN" && clickData.selectionText){
        sauce = clickData.selectionText;
        console.log(sauce);
        chrome.windows.create({
            "url": `https://nhentai.net/g/${sauce}`,
            "incognito": true
        })
    }
});
