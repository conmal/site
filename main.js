/*const client_id = config.CLIENT_ID;

console.log("client id:", client_id);*/

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

const dateChapterRelease = new Date('4/16/2021');

window.onload = (e) => {
	var countdown = document.getElementById('countdown');

	var today = new Date();
	var dayNum = today.getDay();
	var daysToFri = 5 - (dayNum < 5? dayNum : dayNum - 7);

	const diffTime = Math.abs(today - dateChapterRelease);
	const daysSinceChapter = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	var mod = daysSinceChapter % 7;
	if (mod % 2 == 0) {
		daysToFri += 7;
	}

	countdown.innerText = daysToFri + " days";
};