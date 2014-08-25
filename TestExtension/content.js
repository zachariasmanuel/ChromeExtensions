chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "save-data":

		

		var divs = document.getElementsByClassName('parseasinTitle');
		alert(divs);
        
		// console.log(divs[i].getAttribute("data-starred-src"));


			/*var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}*/
		break;
	}
});