function mostrarInputs() {
    var figura = document.getElementById('figura').value;
    var inputsContainer = document.getElementById('figure-container');
    var operacionBtn = document.getElementById('operacion');

    inputsContainer.innerHTML = '';
    operacionBtn.style.display = 'none';

    var inputHTML = '';
    var imageHTML = '';

    switch (figura) 
    {
        case 'circulo':
            inputHTML = '<label for="radio">Radio:</label><input type="text" id="radio" placeholder="Ingrese el radio">';
            imageHTML = '<img src="../img/circulo.png" alt="Círculo">';
            break;

        case 'cuadrado':
            inputHTML = '<label for="lado">Lado:</label><input type="text" id="lado" placeholder="Ingrese el lado">';
            imageHTML = '<img src="./img/cuadrado1.jpg" alt="Cuadrado">';
            break;

        case 'triangulo':
            inputHTML = '<label for="base">Base:</label><input type="text" id="base" placeholder="Ingrese la base"><br>' +
                        '<label for="altura">Altura:</label><input type="text" id="altura" placeholder="Ingrese la altura">';
            imageHTML = '<img src="./img/triangulo-removebg-preview.png" alt="Triángulo">';
            break;
    }
    

    inputsContainer.innerHTML = imageHTML + inputHTML;
    operacionBtn.style.display = 'inline-block';
}

function operacionArea() 
{
    var figura = document.getElementById('figura').value;
    var resultado = '';
    var resultadoElemento = document.getElementById('resultado-area');

    switch (figura) 
    {
        case 'circulo':
            var radio = parseFloat(document.getElementById('radio').value);

            if (radio > 0) 
            {
                var areaCirculo = Math.PI * radio * radio;
                resultado = 'El área es ' + areaCirculo.toFixed(2) + ' u²';
            } 

            else 
            {
                resultado = 'ERROR';
            }

            break;

        case 'cuadrado':
            var lado = parseFloat(document.getElementById('lado').value);

            if (lado > 0) 
            {
                var areaCuadrado = lado * lado;
                resultado = 'El área es ' + areaCuadrado.toFixed(2) + ' u²';
            } 
            
            else 
            {
                resultado = 'ERROR';
            }

            break;

        case 'triangulo':
            var base = parseFloat(document.getElementById('base').value);
            var altura = parseFloat(document.getElementById('altura').value);

            if (base > 0 && altura > 0) 
            {
                var areaTriangulo = (base * altura) / 2;
                resultado = 'El área es ' + areaTriangulo.toFixed(2) + ' u²';
            } 
            
            else 
            {
                resultado = 'ERROR';
            }
            
            break;
    }

        resultadoElemento.innerHTML = resultado;
}