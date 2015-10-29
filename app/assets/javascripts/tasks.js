// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// $(document).on("ready", ready);

// function ready() {
// 	$('#new_task').on('ajax:success', newTask);

// 	function newTask() {
// 		$('body').append(data);


// $('#tasks').append(data);
// $('#task_name').val('');

// $(document).on("ready page:load", ready)
// 	}
// }

function ready() {

  // console.log("the doc is ready");
  // console.dir($('form'));
  $('form').on('ajax:complete', function(event, xhr, status, error) {
  	// $(this).append(xhr.responseText)
  	// console.dir(xhr.responseText);
  	// window.location.reload();
  	$('body').append(xhr.responseText);
  	$('#task_name').val("");
  }); 
}

	// $(function() {

	// 	});

$(document).on('ready page:load', ready);