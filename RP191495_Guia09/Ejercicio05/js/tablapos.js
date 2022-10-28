function init() {
    //Variable donde iremos acumulando los resultados que queremos presentar
    var results = "";
    //Obtener la cantidad de filas de la tabla
    var tablas = document.getElementsByTagName("table");
    var numRows = tablas[0].rows.length;
    //Creando el nodo dentro del elemento div donde mostraremos los resultados
    var div = document.getElementById("results");
    //Creando un nodo para titular de los resultados
    var highlighted = document.createElement("p");
    div.appendChild(highlighted);
    highlighted.setAttribute("class", "highlighted");
    //Creando el nodo de texto para el titular de los resultados
    highlighted.appendChild(document.createTextNode("Recorrido por los nodos de la tabla "));
    var paragraph1 = document.createElement("p");
    div.appendChild(paragraph1);
    results += "Cantidad de filas: " + numRows + "\n";
    //Agregando los resultados que queremos mostrar en el div
    paragraph1.appendChild(document.createTextNode(results));
    results = "";
    //Cantidad de elementos thead
    //Cantidad de elementos tbody
    var numBodies = tablas[0].tBodies.length;
    //Creando otro párrafo dentro del div para continuar mostrando resultados
    var paragraph2 = document.createElement("p");
    div.appendChild(paragraph2);
    results += "Cantidad de tbody en la tabla: " + numBodies + "\n";
    //Agregando los resultados que queremos mostrar en el div
    paragraph2.appendChild(document.createTextNode(results));
    results = "";
    //Cantidad de filas del primer elemento tbody
    var numRowsBody = tablas[0].tBodies[0].rows.length;
    //Creando otro párrafo dentro del div para continuar mostrando   resultados
    var paragraph3 = document.createElement("p");
    div.appendChild(paragraph3);
    results += "Cantidad del filas del elemento tbody: " + numRowsBody + "\n";
    //Agregando los resultados que queremos mostrar en el div
    paragraph3.appendChild(document.createTextNode(results));
    results = "";
    //Cantidad de columnas del primer elemento tbody
    var numCols = tablas[0].rows[0].cells.length;
    //Creando otro párrafo dentro del div para continuar mostrando resultados
    var paragraph4 = document.createElement("p");
    div.appendChild(paragraph4);
    results += "Cantidad de columnas del elemento tbody: " + numCols +
        "\n";
    //Agregando los resultados que queremos mostrar en el div
    paragraph4.appendChild(document.createTextNode(results));
    results = new Array();
    //Navegando por toda la tabla de filas a columnas
    var rows = tablas[0].rows;
    var rowsTotal = rows.length;
    var fila = "";
    //Recorrido por todas los elementos de la tabla
    for (var i = 0; i < rowsTotal; i++) {
        var fila = rows[i];
        var columnas = fila.cells;
        var colsTotal = columnas.length;
        for (var j = 0; j < colsTotal; j++) {
            var columna = columnas[j];
            results += "(fila: " + i + ", col: " + j + ") = " +
                columna.innerHTML + "\n";
        }
        //Creando otro párrafo dentro del div para continuar mostrando
        resultados
        fila[i] = document.createElement("p");
        div.appendChild(fila[i]);
        //Agregando los resultados que queremos mostrar en el div
        fila[i].appendChild(document.createTextNode(results));
        results = "";
    }
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
