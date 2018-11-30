    var val= 0;
    var val2 = "kadirs";
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
            storeId = "store" + initial;
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
            val = val + 1;
            document.getElementById("val").innerHTML = val;

        }

        function downloadd(){
            userInput= document.getElementById("userInput").value
            alert(userInput);
            storeId2 = "store" + userInput;
            alert(storeId2);
            dwdstr = aop.getStore(storeId2);
            alert(dwdstr);
            document.getElementById("DWDstr").innerHTML = dwdstr;    
            valdwd = JSON.parse(dwdstr);
            alert(valdwd);
            document.getElementById("vallll").innerHTML = valdwd.studentname;
            document.getElementById("valllll").innerHTML = valdwd.classnumber;
        }