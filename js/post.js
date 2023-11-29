$(function(){
$('form').on('submit', function () {
  if (window.filesize > 1024*5) {
    alert('max upload size is 5k');
return false;
  }
  $.ajax({
    // Your server script to process the upload
    url: $(this).attr("action"),
    type: 'POST',

    // Form data
    data: new FormData($(this)[0]),

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.redirect){
	    window.location=data.redirect;
	    }
	    if (data.ecritfichier){
		    alert("le programme a écrit le code dans 1 fichier")
	    
	    }
	    if (data.pic){
		   $("#imagetitle").show();
		   $("#imagetable").append(` <span>
			    <a class="mylinks" onclick="" href="javascript:void(0)" data-begin="\<img src='/uploads/${data.pic}' width='100' height='100' alt='${data.pic}' />" data-end=""><img src="/uploads/${data.pic}" width="100" height="100" alt="${data.pic}" />${data.pic}</a>
			                    </span>
					    `)

	    
	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
  });
  
});
