    var val= 0;
    var val2 = "";
    var valarray = [];
    var json = [];
    var valstring = "";
    var dwdstr = "";
    var valdwd = 0;
    var initial = 0;
    var storeId = "store" + initial;
    var userInput = 0;
    var storeId2 = "store" + userInput;

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            val2 = document.getElementById("val2").innerHTML;
            valarray = {"numvalue": val, "nameko": val2};
            //json.push(valarray);
            valstring = JSON.stringify(valarray);
            alert(storeId);
            document.getElementById("valarr").innerHTML = valarray;
            alert(valarray);
            document.getElementById("valstr").innerHTML = valstring;
            alert(valstring);
            aop.setStore(storeId, valstring);
            initial = initial + 1;


        }

        function downloadd(){
            userInput= document.getElementById("userInput").value
            alert(userInput);
            alert(storeId2);
            dwdstr = aop.getStore(storeId2);
            alert(dwdstr);
            document.getElementById("DWDstr").innerHTML = dwdstr;    
            valdwd = JSON.parse(dwdstr);
            alert(valdwd);
            document.getElementById("vallll").innerHTML = valdwd.numvalue;
            document.getElementById("valllll").innerHTML = valdwd.nameko;
        }