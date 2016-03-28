GitHub Pull Request Message
===========================

Just copy this code to the bookmark pane of your browser.
Whenever you are creating a PR in github, just press the bookmarklet and voila,
All the commit messages are now aggregated in your PR comment box.

The code:

    javascript:(function(){
        msgs = document.getElementsByClassName("commit-message");
        commitMsgs = "";
        for (i=0; i<msgs.length; i++) {
            commitMsgs += msgs[i].getElementsByClassName("message")[0].getAttribute("title") + "\n\n";
        }
        document.getElementById("pull_request_body").value = commitMsgs;
    })()
