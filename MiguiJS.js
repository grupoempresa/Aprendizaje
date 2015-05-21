
function sumar()
{
	var x = parseInt(document.getElementById("suma1").value);
	var y = parseInt(document.getElementById("suma2").value);
	var res = document.getElementById("calcularSum");
	res.value = x+y; 	
}
function resto()
{
	var x = parseInt(document.getElementById("resto1").value);
	var y = parseInt(document.getElementById("resto2").value);
	var res = document.getElementById("calcularRes");
	res.value = x-y;
}

function multiplo()
{
	var x = parseInt(document.getElementById("mult1").value);
	var y = parseInt(document.getElementById("mult2").value);
	var res = document.getElementById("calcularMult");
	res.value = x*y;
}

function divisor()
{
	var x = parseInt(document.getElementById("div1").value);
	var y = parseInt(document.getElementById("div2").value);
	var res = document.getElementById("calcularDiv");
	res.value = x/y;
}

