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
	textarea.focus();
  textarea.selectionEnd = (first + sel).length;

};
$(".mycssproprietes").click(function() {
	var mylink=$(this)[0];
	var mybegin=mylink.dataset.begin;
	var myend=mylink.dataset.end;
  var textarea=document.getElementById("mytextarea");
  var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = textarea.selectionEnd;

    // Obtain the selected text
    var sel = textarea.value.substring(start, finish);
    var othertext = mytext.innerHTML;
  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);

  textarea.value = first + mybegin+"valeur"+myend + rest;

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionStart = (first + mybegin).length;
  textarea.selectionEnd = (first + mybegin+"valeur").length;

});
$(".mylinks").click(function() {
	var mylink=$(this)[0];
	var mybegin=mylink.dataset.begin;
	var myend=mylink.dataset.end;
  var textarea=document.getElementById("mytextarea");
  var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = textarea.selectionEnd;

    // Obtain the selected text
    var sel = textarea.value.substring(start, finish);
    var othertext = mytext.innerHTML;
  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);

  textarea.value = first + mybegin+myend + rest;

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionStart = (first + mybegin).length;
  textarea.selectionEnd = (first + mybegin).length;

});
mafeuille.onclick = () => {
var textarea=document.getElementById("mytextarea");
var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = textarea.selectionEnd;

    // Obtain the selected text
    var sel = textarea.value.substring(start, finish);
    var othertext = mytext.innerHTML;


  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);

  textarea.value = first + othertext + rest;

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionStart = (first + othertext).length;
  textarea.selectionEnd = (first + othertext).length;

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
	textarea.focus();
  textarea.selectionEnd = (first ).length;

};

});
