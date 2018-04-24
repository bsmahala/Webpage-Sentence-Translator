        var supportedLang = [
            {lan: "Hindi", code: 'hi'},
            {lan: "English", code: 'en'},
            {lan: "Russian", code: 'ru'},
            {lan: "Japanese", code: 'ja'},
        ];


        function saveToLocal() {
            var res = {};
            res.s = document.getElementById("sl").value;
            res.d = document.getElementById("dl").value;
            res.t = document.getElementById("t").value;
            chrome.storage.sync.set(res, function() {
                
            });
        }
        

        function setdd(res={}) {
                res.s = res.s || 'en';
                res.d = res.d || 'hi';
                res.t = res.t || 10000;
                document.getElementById("sl").value = res.s;
                document.getElementById("dl").value = res.d;
                document.getElementById("t").value = res.t;                
        }

        function loaddd() {

            var html = '';
            supportedLang.forEach(function(e){
                html += '<option value="'+e.code+'">'+e.lan+'</option>';
            });
            document.getElementById("sl").innerHTML = html;
            document.getElementById("dl").innerHTML = html;
            setdd();
            chrome.storage.sync.get(['s', 'd', 't'], function(res) {
                setdd(res);                
            });
            document.getElementById("sl").addEventListener('change', saveToLocal);
            document.getElementById("dl").addEventListener('change', saveToLocal);
            document.getElementById("t").addEventListener('keyup', saveToLocal);
        }
        loaddd();