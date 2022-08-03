

var input = document.getElementById('input').onkeydown = () => {
    var musica = new Audio("musica.mp3");

    musica.play();
}

var btn = document.getElementById('btn').onclick = () => {

    var resultado = document.getElementById('resultado')
    resultado.setAttribute('style', 'display:visible')
    resultado.innerHTML = "";
    var input = document.getElementById('input').value


    if (input != " " && input != null) {

        var escolha = ""

        escolha = Math.ceil((Math.floor(Math.random() * 10) + 0));


        console.log(escolha)

        switch (escolha) {
            case 0:
                resultado.innerHTML = "Sim";
                break;

            case 1:
                resultado.innerHTML = "Não";
                break;

            case 2:
                resultado.innerHTML = "Tenho quase certeza que sim!";
                break;

            case 3:
                resultado.innerHTML = "Talvez";
                break;

            case 4:
                resultado.innerHTML = "Sem a menor sombra de dúvida!";
                break;

            case 5:
                resultado.innerHTML = "Difícil responder essa.";
                break;

            case 6:
                resultado.innerHTML = "Você está desesperado(a) né? ";
                break;

            case 7:
                resultado.innerHTML = "Com toda certeza que sim!";
                break;

            case 8:
                resultado.innerHTML = "Pode tirar teu cavalinho da chuva! Nem pensar!";
                break;

            case 9:
                resultado.innerHTML = "Claro.. que não!";
                break;

            case 10:
                resultado.innerHTML = "Claro que sim !!!";
                break;
        }
    }


}