function space(str, numspace)
{
    var emptySpace = "";
    for (i = 0; i < numspace.length; i++){
        emptySpace += " ";
    }
    var output = emptySpace + str + emptySpace;
    return output;
}