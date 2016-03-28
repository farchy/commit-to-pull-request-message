javascript:(function(){
	msgs = document.getElementsByClassName("commit-message");
	commitMsgs = "";
	for (i=0; i<msgs.length; i++) {
		commitMsgs += msgs[i].getElementsByClassName("message")[0].getAttribute("title") + "\n\n";
	}
	document.getElementById("pull_request_body").value = commitMsgs;
})()
