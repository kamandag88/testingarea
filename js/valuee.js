    var val= 0;
    var valstring = "";
    var dwdstr = "";
    var valdwd = 0;

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            valstring = JSON.stringify(val);
            aop.setStore("store0", valstring)
        }

        function downloadd(){
            dwdstr = aop.getStore("store0");
            valdwd = JSON.parse(dwdstr);
            document.getElementById("vallll").innerHTML = valdwd;
        }