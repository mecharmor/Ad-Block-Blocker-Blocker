document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  
	checkPageButton.checked=	(window.localStorage["isEnabled"]== "true");
  
  checkPageButton.addEventListener('click', function() {
	// Variables
	let	a=	(window.localStorage.getItem("isEnabled")== "true");
	
	chrome.runtime.sendMessage({isEnabled:!a}, function(res)	{
		console.log(res);
	});
  });
});