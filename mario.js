
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
        for (var i = 0; i < (height - (1+j)); i++) {
            rez = rez + ' ';
        }
        for (i = 0; i < j+2 ; i++)
            rez = rez + '#';

        console.log(rez);
    }
        // TODO
    // print that pyramid!

}
