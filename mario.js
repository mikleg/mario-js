
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {


    for (var j = 0; j < height; j++) {
        var row = document.createElement("DIV");
        for (var i = 0; i < (height - (1+j)); i++) {
            var block = document.createElement("DIV");
            block.setAttribute("class", "whiteBlock");
            row.appendChild(block);
        }
        for (i = 0; i < j+2 ; i++) {
            block = document.createElement("DIV");
            block.setAttribute("class", "redBlock");
            row.appendChild(block);
        }
        document.getElementById("pyramid").appendChild(row);
    }

}
