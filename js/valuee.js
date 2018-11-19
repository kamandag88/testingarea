        setup();

        var value;
        var score;
        var count;

        count=0;
        score=0;

        function setup(){
        if(cpf)
            cpf.setPinMode('["resetPin"],["setPinMode", "digital", 2,"INPUT"]');
        }



        function loop(){

            if(cpf){

                value = cpf.get("d2");
                document.getElementById("val").innerHTML = value; 

                if(value == 1 && count == 0) {
                    setbackg();
                    addscore();
                    addcounter();
                }
                else{
                    setbackgback();
                }
            }
                setTimeout("loop()", 1000); 
        }

        loop();


        function setbackg(){
            document.body.style.backgroundImage = "url('img/InsertCoverInfo.jpg')";
        }

        function setbackgback(){
            document.body.style.backgroundImage = "url('img/6thScreen.jpg')";
        }

        function addscore(){
            score = score + 100;
            document.getElementById("vall").innerHTML = score;
        }

        function addcounter(){
            count = count + 1;
            document.getElementById("valll").innerHTML = count;
        }