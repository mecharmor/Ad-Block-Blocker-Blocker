
window.addEventListener("load", function()	{
	func();
});

function func()	{
	ob=	new MutationObserver(function(args)	{
		for(let a= 0; a< args.length; a++)	{
			for(let b= 0; b< args[a].addedNodes.length; b++)	{
				if(!args[a].addedNodes[b].getElementsByTagName)
					continue;
				
				// Variables
				let	imgs=	args[a].addedNodes[b].getElementsByTagName("img");
				
				for(let c= 0; c< imgs.length; c++)	{
					try{
					  imgs[c].src = 'https://placekitten.com/' + imgs[c].width + '/' + imgs[c].height;
					  // Placeholder one has a better image system than placekitten because there are not enough kitten photos
					}catch(e){console.log(e);}
				}
			}
		}
	});
	ob.observe(document.body, {
		childList:	true,
		subtree:	true,
		attributes:	true
	});

	setTimeout(changeImages, 5000);


	function changeImages()	{
		// Variables
		let	imgs=	document.getElementsByTagName("img");

		for(let b= 0; b< imgs.length; b++)	{
			try{
			  imgs[b].src = 'https://placekitten.com/' + imgs[b].width + '/' + imgs[b].height;
			  //imgs[b].src = 'https://via.placeholder.com/' + imgs[b].width + 'x' + imgs[b].height;
			}catch(e){console.log(e);}
		}
	}
	changeImages();
}
func();