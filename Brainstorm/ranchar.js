function ranchar(userInput) {
  var t = "";
  var lexicon = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < userInput; i++)
    t += lexicon.charAt(Math.floor(Math.random() * lexicon.length));

  return t;
}
