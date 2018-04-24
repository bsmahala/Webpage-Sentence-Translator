function getEXTensionMyBackgroundData(text) {
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=" + encodeURI(document.getSelection().toString());
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            var t = JSON.parse(xhttp.responseText)
             var alr = document.getElementById("0_1translator_simplydev_alert");
                if(!alr) {
                    alr = document.createElement('div');
                    alr.setAttribute('id', '0_1translator_simplydev_alert');
                    alr.style.zIndex = 100344;
                    alr.style.position = 'fixed';
                    alr.style.right = 0;
                    alr.style.bottom = 0;
                    alr.style.bottom = 0;
                    alr.style.padding = "10px";
                    document.body.appendChild(alr);
                }

            var alt = document.createElement('div');
            alt.style.padding = "10px";
            alt.style.background = 'red';
            alt.style.color = '#fff';
            alt.innerText =    t[0][0][0];
            alt.style.margin = "5px";
            alt.style.fontSize = '17px';
            alr.appendChild(alt);
            setTimeout(function(){
                alr.removeChild(alt);
            }, 10000);            

            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    return 1;
}



document.getElementsByTagName("html")[0].addEventListener("keyup", function(e){
    if(e && e.altKey && e.keyCode == 77 ){
        getEXTensionMyBackgroundData();
    }
});