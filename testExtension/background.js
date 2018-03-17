
if(this.localStorage["isEnabled"]== undefined)	{
	this.localStorage["isEnabled"]=	true;
}

if(this.localStorage["isEnabled"])	{
	call();
}

chrome.runtime.onMessage.addListener(function(req, sender, res)	{
	this.localStorage["isEnabled"]=	req.isEnabled;
	call(true);
});

chrome.tabs.onUpdated.addListener(function(args)	{
	call(false);
});

function call(reload)	{
	if(this.localStorage["isEnabled"]== "true")	{
		chrome.tabs.query({active:true}, function(tabs)	{
			chrome.tabs.executeScript(tabs[0].id, {file:"content.js", runAt:"document_end"}, function(results)	{
				console.log(results);	
			});
		});
	}
	else if(reload)	{
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.reload(tabs[0].id);
		});
	}
}