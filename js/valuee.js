    var val= 0;
    var valarray = [];
    var json = [];
    var valstring = "";
    var dwdstr = "";
    var valdwd = 0;
    var storeId = "store" + 8;

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            valarray = {"numvalue": val};
            //json.push(valarray);
            valstring = JSON.stringify(valarray);
            alert(storeId);
            document.getElementById("valarr").innerHTML = valarray;
            alert(valarray);
            document.getElementById("valstr").innerHTML = valstring;
            alert(valstring);
            aop.setStore(storeId, valstring);

        }

        function downloadd(){
            alert(storeId);
            dwdstr = aop.getStore(storeId);
            alert(dwdstr);
            document.getElementById("DWDstr").innerHTML = dwdstr;    
            valdwd = JSON.parse(dwdstr);
            alert(valdwd);
            document.getElementById("vallll").innerHTML = valdwd.numvalue;
        }