    var val= 0;
    var valarray = [];
    var json = [];
    var valstring = "";
    var dwdstr = "";
    var valdwd = 0;

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            valarray = {"value": val};
            document.getElementById("valarr").innerHTML = valarray;
            json.push(valarray);
            valstring = JSON.stringify(json);
            document.getElementById("valstr").innerHTML = valstring;
            var storeId = "store" + 1;
            aop.setStore(storeId, valstring)
        }

        function downloadd(){
            dwdstr = aop.getStore(storeId);
            document.getElementById("DWDstr").innerHTML = dwdstr;    
            valdwd = JSON.parse(dwdstr);
            document.getElementById("vallll").innerHTML = valdwd.value;
        }