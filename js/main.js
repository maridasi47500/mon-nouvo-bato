function on() {
	  document.getElementById("overlay").style.display = "block";
}
function on() {
	  document.getElementById("overlay").style.display = "block";
}

function off() {
	  document.getElementById("overlay").style.display = "none";
}
$(function(){
	$("#mycss").click(function(){
	$("#ajouter").html("ajouter à "+$(this).val()+"% une rotation ou une translation");
		var x="";
		x+="@keyframes mycssrotating {";
		x+=$("#mycss").val()+"% { transform: translate(-10px, -10px) rotate(0deg); }"
		x+="}";
  var textarea=document.getElementById("mytextareacss");
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
	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionStart = (first + mybegin).length;
  textarea.selectionEnd = (first + mybegin+"valeur").length;
	});
	$("#mycss").input(function(){
	$("#ajouter").html("ajouter à "+$(this).val()+"% une rotation ou une translation");
	});
	$("#mytextarea").keyup(function(){
var textarea=document.getElementById("mytextarea");
var textareacss=document.getElementById("mytextareacss");
	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");
	});
	$("#codecss").click(function(){
		$("#mytextareacss")[0].value="";
		var picswithid=$(".right img[id]:not([id=''])");
	if (picswithid.length > 0){
	picswithid.each(function(){
		var myid=$(this)[0].id || "rotating";
		$("#mytextareacss")[0].value+="#"+myid+" {";
		$("#mytextareacss")[0].value+="animation-name:mycss"+myid+";";
		$("#mytextareacss")[0].value+="animation-duration:3s;";
		$("#mytextareacss")[0].value+="}";
		$("#mytextareacss")[0].value+="@keyframes mycss"+myid+" {";
		$("#mytextareacss")[0].value+=$("#mycss").val()+"% { transform: translate(-10px, -10px) rotate(0deg); }"
		$("#mytextareacss")[0].value+="}";
	});
	}else{
		alert("aucune image n'a d'attribut id dans le code html");
	}
	});
	$("#mytip").click(function(){
		var myicon=$(this);
		$.ajax({
			url: "/gettips",
			success:function(data){
				$("#my-title").html(myicon[0].firstChild.alt+" "+data.title);
				$("#my-content").html(data.content);
	  document.getElementById("overlay").style.display = "block";
			}
		});
	});
	$("#mytask").click(function(){
		var myicon=$(this);
		$.ajax({
			url: "/gettasks",
			success:function(data){
				$("#my-title").html(myicon[0].firstChild.alt+" "+data.title);
				$("#my-content").html(data.content);
	  document.getElementById("overlay").style.display = "block";
			}
		});
	});
var monciseau=document.getElementById("monciseau");
var mesfeuilles=document.getElementById("mesfeuilles");
var mafeuille=document.getElementById("mafeuille");
mesfeuilles.onclick = () => {
var textarea=document.getElementById("mytextarea");
var textareacss=document.getElementById("mytextareacss");
var mytext=document.getElementById("mytext");
    var start = textarea.selectionStart;

    // Obtain the index of the last selected character
  var finish = textarea.selectionEnd;

    // Obtain the selected text
  var sel = textarea.value.substring(start, finish);
  let first = textarea.value.slice(0, textarea.selectionStart);
  let rest = textarea.value.slice(textarea.selectionEnd, textarea.value.length);



  mytext.innerHTML =sel;
	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionEnd = (first + sel).length;

};
$(".mycssproprietes").click(function() {
	var mylink=$(this)[0];
	var mybegin=mylink.dataset.begin;
	var myend=mylink.dataset.end;

  var textarea=document.getElementById("mytextarea");
  var textareacss=document.getElementById("mytextareacss");
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
	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionStart = (first + mybegin).length;
  textarea.selectionEnd = (first + mybegin+"valeur").length;

});
$(".mylinks").click(function() {
	var mylink=$(this)[0];
	var mybegin=mylink.dataset.begin;
	var myend=mylink.dataset.end;
	var attcheck=$("input[type=checkbox].myattribute:checked");
	if (attcheck.length > 0){
		mybegin=mybegin.replace(">","");
		for (var i = 0;i<attcheck.length;i++){
			mybegin+=" ";
			mybegin+=attcheck[i].value;
			mybegin+="=\"\"";
		}
		mybegin+=(">");
	}
  var textarea=document.getElementById("mytextarea");
  var textareacss=document.getElementById("mytextareacss");
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

	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");
  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionStart = (first + mybegin).length;
  textarea.selectionEnd = (first + mybegin).length;

});
mafeuille.onclick = () => {
var textarea=document.getElementById("mytextarea");
var textareacss=document.getElementById("mytextareacss");
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
	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");
	textarea.focus();
  textarea.selectionStart = (first + othertext).length;
  textarea.selectionEnd = (first + othertext).length;
};
monciseau.onclick = () => {
var textarea=document.getElementById("mytextarea");
var textareacss=document.getElementById("mytextareacss");
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
	$(".right").html(textarea.value+"<style>"+textareacss.value+"</style>");

  // Bonus: place cursor behind replacement
	textarea.focus();
  textarea.selectionEnd = (first ).length;

};

});
