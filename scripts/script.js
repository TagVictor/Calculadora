function calcular(n1, n2){
    n = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    selector = document.getElementById("Selector").value;

    switch(selector){
        case "+":
            calculo = (n1 + n2);
            document.getElementById("res").innerHTML = 'O resultado é $(n1) +  $(n2) = $(calculo)';
            break;
        case "-":
            calculo = (n1 - n2);
            document.getElementById("res").innerHTML = 'O resultado é $(n1) -  $(n2) = $(calculo)';
            break;
        case "*":
            calculo = (n1 * n2);
            document.getElementById("res").innerHTML = 'O resultado é $(n1) *  $(n2) = $(calculo)';
            break;
        case "/":
            calculo = (n1 / n2);
            document.getElementById("res").innerHTML = 'O resultado é $(n1) /  $(n2) = $(calculo)';
            break;
    }
}