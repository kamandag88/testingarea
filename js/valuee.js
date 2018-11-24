    var val= 0;
    var valarray = [];
    var json = [];
    var valstring = "";
    var dwdstr = "";
    var valdwd = 0;

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            valarray = {"value": val};
            json.push(valarray);
            valstring = JSON.stringify(json);
            aop.setStore("store0", valstring)
        }

        function downloadd(){
            dwdstr = aop.getStore("store0");    
            valdwd = JSON.parse(dwdstr);
            document.getElementById("vallll").innerHTML = valdwd.value;
        }