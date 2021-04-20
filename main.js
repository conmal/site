const client_id = ${{secret.CLIENT_ID}};

console.log("client id:", client_id);

(function($){
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
})(jQuery);