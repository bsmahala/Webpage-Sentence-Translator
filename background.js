

chrome.contextMenus.create({
  id: "contenxt34233",
  title: "SWP translator ( Alt + m )",
  contexts:["selection"]
});



chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.getSelected(function(tab){
    chrome.storage.sync.get(['s','d','t'], function(res) {
      res.s = res.s || 'en';
      res.d = res.d || 'hi';
      res.t = res.t ||  10000;
      chrome.tabs.executeScript(tab.id, {
        code: "getEXTensionMyBackgroundData("+JSON.stringify(res)+")"
      })
    });
  });
});

chrome.contextMenus.onClicked.addListener(function(e){
  if(e.menuItemId == 'contenxt34233') {
    chrome.tabs.getSelected(function(tab){
      chrome.tabs.executeScript(tab.id, {
        code: 'getEXTensionMyBackgroundData()'
      })
    });
  }
});
