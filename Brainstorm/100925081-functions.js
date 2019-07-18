function ranchar() {
  var t = "";
  var lexicon = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < this.length; i++)
    t += lexicon.charAt(Math.floor(Math.random() * lexicon.length));

  return t;
}

function capit(str) {
  var output = "";
  for(i = 0; i < str.length; i++) {
    output += String.fromCharCode(str.charCodeAt(i) & 223);
  }
  return output;
}


function space(str, numspace)
{
    var emptySpace = "";
    for (i = 0; i < numspace; i++){
        emptySpace += " ";
    }
    var output = emptySpace + str + emptySpace;
    return output;
}
function backwards(str) {
    output = "";
    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
}
    return output;
}
function mixcat(str,str1) {
 
    x = "";
    y = "";

i = 0;
j = 0;
while (i < str.length && j < str1.length){
    output = output + (str.charAt(i++));
    output = output + (str1.charAt(j++));
}
	return output
}

// function remove(str){

//     var output = "";
//     for (i = 0; i < str.length; i++){
// while( str[i] = ("/\s")){
//         output = str[i];
// }
// Return output;
// }
// function conc(arg1,arg2)
//         {  combo = "";
//         for(let i = 0; i <= arg1.length; i++;){
//         combo[i] = combo[i] + arg1[i];
//         for(let j = 0; j <= arg2.length; i++;){
//         combo[j] = combo[j] + arg2[i];}
// }
//   return combo;
// }
