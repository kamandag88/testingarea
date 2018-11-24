    var val= 0;
    var valstring = "";
    var dwdstr = "";

        function uploadd(){
            val = document.getElementById("val").innerHTML;
            valstring = val.toString();
            aop.setStore(store0, valstring)
        }

        function downloadd(){
            dwdstr = aop.GetStore(store0);
            document.getElementById("vallll").innerHTML = dwdstr;
        }