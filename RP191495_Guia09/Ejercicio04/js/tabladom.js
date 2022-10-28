function init() {
    var boton = document.getElementById("btnSend");
    if (boton.addEventListener) {
        boton.addEventListener("click", function () {
            create_table(document.frmtable);
        }, false);
    } else if (boton.attachEvent) {
        boton.attachEvent("onclick",
            function () {
                create_table(this.form);
            });
    }
}

function create_table(current_form) {
    //Si el navegador no soporta DOM retornar
    if (!document.getElementById) {
        return;
    }
    //Obtener datos de filas y columnas
    var table_rows = current_form.rows_text.value;
    var table_columns = current_form.columns_text.value;
    //Obtener el elemento div donde se mostrará la tabla
    var table_div = document.getElementById("tableholder");
    //Crear y añadir el elemento table
    var table_node = document.createElement("table");
    table_div.appendChild(table_node);
    //Crear cabecera de la tabla con caption
    var table_caption = document.createElement("caption");
    table_node.appendChild(table_caption);
    //Crear y añadir el elemento tbody a la tabla
    var tbody_node = document.createElement("tbody");
    table_node.appendChild(tbody_node);
    //Ciclo o lazo para añadir todos los elementos tr para las filas
    for (var row_counter = 1; row_counter <= table_rows; row_counter++) {
        var tr_node, td_node;
        tr_node = document.createElement("tr");
        tbody_node.appendChild(tr_node);
        //Ciclo o lazo para añadir todos los elementos td
        //para las columnas de la fila actual
        for (var col_counter = 1; col_counter <= table_columns; col_counter++) {
            if (row_counter == 1 && document.frmtable.chkhead.checked) {
                td_node = document.createElement("th");
            } else {
                td_node = document.createElement("td");
            }
            tr_node.appendChild(td_node);
            //Añadir el nodo de texto con el contenido a la celda actual
            var text_node = document.createTextNode("Celda(" + row_counter + ", " +
                col_counter + ")");
            td_node.appendChild(text_node);
        }
    }
    //Añadir borde a la tabla
    table_node.border = 1;
    //Agregar nodo de texto a la cabecera de la tabla (caption)
    var text_node_caption = document.createTextNode("Nueva tabla");
    table_caption.appendChild(text_node_caption);
    //Asignar un id al cuerpo de la tabla
    tbody_node.id = "tablebody";
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
