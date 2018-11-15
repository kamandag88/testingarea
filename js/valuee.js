        setup();

        var value;

        function setup(){
        if(cpf)
            cpf.setPinMode('["resetPin"],["setPinMode", "digital", 2,"INPUT"]');
        }



        function loop(){

            if(cpf){

                value = cpf.get("d2");
                document.getElementById("val").innerHTML = value; 
            }

                setTimeout("loop()", 1000); 
        }

        loop();
