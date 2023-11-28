$(function(){
var monciseau=document.getElementById("monciseau");
var mesfeuilles=document.getElementById("mesfeuilles");
var mafeuille=document.getElementById("mafeuille");
mesfeuilles.onclick = () => {
var textarea=document.getElementById("mytextarea");
var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = textarea.selectionEnd;

    // Obtain the selected text
    var sel = textarea.value.substring(start, finish);
  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);



  mytext.innerHTML =sel;

  // Bonus: place cursor behind replacement
  textarea.selectionEnd = (first + sel).length;
};
mafeuille.onclick = () => {
var textarea=document.getElementById("mytextarea");
var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = textarea.selectionEnd;

    // Obtain the selected text
    var sel = textarea.value.substring(start, finish);


  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);

  textarea.value = first + mytext.innerHTML + rest;

  // Bonus: place cursor behind replacement
  textarea.selectionEnd = (first + sel).length;
};
monciseau.onclick = () => {
var textarea=document.getElementById("mytextarea");
var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = textarea.selectionEnd;

    // Obtain the selected text
    var sel = textarea.value.substring(start, finish);
mytext.innerHTML = sel;


  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);

  textarea.value = first + "" + rest;

  // Bonus: place cursor behind replacement
  textarea.selectionEnd = (first ).length;
};

});
