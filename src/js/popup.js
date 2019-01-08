$(document).ready(function() {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('/js/inject.js');
	(document.head||document.documentElement).appendChild(s);
	s.onload = function() {
	    s.remove();
	};
});