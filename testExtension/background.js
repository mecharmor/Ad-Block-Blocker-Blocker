
// Variables
let	ob;

chrome.runtime.onMessage.addListener(function(req, sender, res)	{
	console.log(this);
	this.localStorage["isEnabled"]=	req.isEnabled;
	call(true);
});

chrome.tabs.onUpdated.addListener(function(args)	{
	call(false);
	console.log(args);
});


if(this.localStorage["isEnabled"]== undefined)	{
	this.localStorage["isEnabled"]=	true;
}

console.log(this.localStorage["isEnabled"]);

if(this.localStorage["isEnabled"])	{
	call();
}

function call(reload)	{
	if(this.localStorage["isEnabled"]== "true")	{
		chrome.tabs.query({active:true}, function(tabs)	{
			chrome.tabs.executeScript(tabs[0].id, {file:"content2.js", runAt:"document_end"}, function(results)	{
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