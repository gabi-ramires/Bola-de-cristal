var musica = new Audio('musica.mp3');

var aux = 0;

var input = document.getElementById('input')
var btn = document.getElementById('btn')

function Botao() {

    var resultado = document.getElementById('resultado')
    resultado.setAttribute('style', 'display:visible')
    resultado.innerHTML = "";
    var input = document.getElementById('input').value


    if (input != " " && input != null) {

        var escolha = ""

        escolha = Math.ceil((Math.floor(Math.random() * 17) + 0));


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
                resultado.innerHTML = "Você está desesperado(a) para saber isso né?";
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

            case 11:
                resultado.innerHTML = "Você sabe que a resposta é SIM";
                break;

            case 12:
                resultado.innerHTML = "Você sabe que a resposta é NÃO";
                break;

            case 13:
                resultado.innerHTML = "Bem que você gostaria né?";
                break;

            case 14:
                resultado.innerHTML = "É bem provável que isso acontença";
                break;

            case 15:
                resultado.innerHTML = "Isso jamais acontecerá";
                break;

            case 16:
                resultado.innerHTML = "O que tudo indica é que sim";
                break;

            case 17:
                resultado.innerHTML = "O que tudo indica é que não";
                break;



        }
    }


}

var input = document.getElementById('input').onclick = () => {
    aux = aux + 1;

    if (aux == 1) {
        var musica = new Audio('musica.mp3');

        musica.play();
    }

    console.log(aux)

}
var input = document.getElementById('input').onkeydown = () => {

    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        Botao();

    }


}