
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
        var rez = '';
        for (var i = 0; i < (height - (1+j)); i++)
            rez = rez + String.fromCharCode(160);
        for (i = 0; i < j+2 ; i++)
            rez = rez + '#';
        var node = document.createElement("P");
        var textnode = document.createTextNode(rez);
        node.appendChild(textnode);
        document.getElementById("pyramid").appendChild(node);

    }
       // TODO
}

//printPyramid(5);