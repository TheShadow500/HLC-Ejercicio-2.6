// Tamaño Matriz 1
let filasA = 3;
let columnasA = 4;

// Tamaño Matriz 2
let filasB = 4;
let columnasB = 5;

document.write("HLC - Actividad 2.6");
document.write("<br>Daniel Amores");

document.write("<br><hr>Comprobando...<br>");
if(columnasA != filasB){
    document.write("No se puede realizar<br>Las Columnas de la Matriz A deben ser igual a las Filas de la Matriz B");
}
else{
    document.write("Columnas de Matriz A igual a Filas de Matriz B<br>");

    let primervector = [];
    let segundovector = [];
    let tercervector = [];

    let suma;

    // Rellenamos la primera matriz con valores aleatorios entre 1 y 9 y lo vamos mostrando por pantalla
    document.write("<br>Primera Matriz (" + filasA + "x" + columnasA + ")");
    document.write("<div class='container'>");
    for(let i = 0; i < filasA; i++){
        primervector[i] = [];
        document.write("<div class='fila'>");
        for(let j = 0; j < columnasA; j++){
            primervector[i][j] = Math.floor(Math.random() * 9) + 1;
            document.write("<div class='celda'>" + primervector[i][j] + "</div>");
        }
        document.write("</div>");
    }
    document.write("</div>");

    // Rellenamos la segunda matriz con valores aleatorios entre 1 y 9 y lo vamos mostrando por pantalla
    document.write("<br><br>Segunda Matriz (" + filasB + "x" + columnasB + ")");
    document.write("<div class='container'>");
    for(let i = 0; i < filasB; i++){
        segundovector[i] = [];
        document.write("<div class='fila'>");
        for(let j = 0; j < columnasB; j++){
            segundovector[i][j] = Math.floor(Math.random() * 9) + 1;
            document.write("<div class='celda'>" + segundovector[i][j] + "</div>");
        }
        document.write("</div>");
    }
    document.write("</div>");
    
    // Realizamos las multiplicaciones. Cada fila de la matriz A multiplica a cada columna de la matriz B
    // Se realiza un primer bucle para recorrer las filas de A, anidando otro bucle que recorre las columnas de B y
    // por último se anida otro bucle que recorre las columnas de A. De este modo se consigue el resultado.
    document.write("<br><br>Tercera Matriz (RESULTADO) (" + filasA + "x" + columnasB + ") ");
    document.write("<div class='container'>");
    for(let i = 0; i < filasA; i++){
        tercervector[i] = [];
        document.write("<div class='fila'>");
        for(let k = 0; k < columnasB; k++){
            suma = 0;
            for(let j = 0; j < columnasA; j++){
                suma += primervector[i][j] * segundovector[j][k];
            }
            tercervector[i][k] = suma;
            document.write("<div class='celda'>" + tercervector[i][k] + "</div>");
        }
        document.write("</div>");
    }
    document.write("</div>");
}