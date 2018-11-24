    var val= 0;
    var valarray = [];
    var json = [];
    var valstring = "";
    var dwdstr = "abcdef";
    var valdwd = 0;
    //var storeId = "store" + 1;
    var storeId = "store" + 8;

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            //valarray = {"value": val};
            //document.getElementById("valarr").innerHTML = valarray;
            //json.push(valarray);
            valstring = JSON.stringify(val);
            alert(storeId);
            document.getElementById("valstr").innerHTML = valstring;
            alert(valstring);
            string x = "abcdef"
            aop.setStore(storeId, x);
        }

        function downloadd(){
            alert(storeId);
            dwdstr = aop.getStore(storeId);
            alert(dwdstr);
            document.getElementById("DWDstr").innerHTML = dwdstr;    
            //valdwd = JSON.parse(dwdstr);
            //document.getElementById("vallll").innerHTML = valdwd;
        }