const client_id = config.CLIENT_ID;

console.log("client id:", client_id);

/*(function($){
    var albumID = '38xVNmG';
    var albumAPI = "https://api.imgur.com/3/album/" + albumID + "/images";

	$.ajax({
		url: albumAPI,
		headers:{
			'Authorization':'Client-ID ' + client_id
		},
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			alert(data.data[0].link);
		},
		error: function() { console.log("ERRORZ"); }
	});
})(jQuery);*/

function setActive(e) {
	var currActive = document.getElementsByClassName("active")[0];
	currActive.classList.remove("active");
	e.classList.add("active");
}

function musicStart() {
	var audio = document.getElementById("music");
	var musicbtn = document.getElementById("musicbtn");

	audio.play();
	musicbtn.innerText = "Playing";
}

window.onload = (e) => {
	document.getElementsByTagName("iframe")[0].src = "pages/higugou.html";
};