

chrome.contextMenus.create({
  id: "contenxt34233",
  title: "SWP translator", 
  contexts:["selection"]
});

chrome.contextMenus.onClicked.addListener(function(e){
  if(e.menuItemId == 'contenxt34233') {
    chrome.tabs.getSelected(function(tab){
      chrome.tabs.executeScript(tab.id, {
        code: 'getEXTensionMyBackgroundData()'
      })
    }
    );
  }
});
