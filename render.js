var xhr = new XMLHttpRequest();
xhr.open('GET','https://cdn.jsdelivr.net/gh/powerXIXI/envelope@latest/share.html',false);
xhr.onload = function(){
	if(xhr.status == 200){
		var doc = document.open('replace','text/html');
		setTimeout(function(){
			doc.write(xhr.responseText);
		},60);
		doc.close();
	}
}
xhr.send();