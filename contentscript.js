function getEXTensionMyBackgroundData(e) {
    if(document.getSelection().toString().length <=0) {
        return;
    }
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+e.s+"&tl="+e.d+"&dt=t&q=" + encodeURI(document.getSelection().toString());
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            var t = JSON.parse(xhttp.responseText)
            var id = "0_1translator_simplydev_alert";
             var alr = document.getElementById(id);
                if(!alr) {
                    alr = document.createElement('div');
                    alr.setAttribute('id', id);
                    alr.style.zIndex = 9100344;
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
            }, e.t);            

            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    return 1;
}