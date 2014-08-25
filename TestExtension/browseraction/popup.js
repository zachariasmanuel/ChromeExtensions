window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({
	        type: "save-data"
	    });
	}
}