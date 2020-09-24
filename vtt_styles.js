var eventListeners = new Array();


var video_cue;
var video_webkit;

function findRule() {

	for ( var i = 0; i < document.styleSheets.legnth; i++ ) {

		var sheet = document.styleSheets[i]

		if ( sheet.href == null || sheet.href.match(/afo/) ) {

			for ( var j = 0; j < sheet.rules.length; j++ ) {

						var rule = sheet.rules[j]

						if ( rule.selectorText && rule.selectorText.match("video::cue") ) {

							video_cue = rule

						}


			}
		}

	}
 return video_cue;


}


function start() {

	var video_cue = findRule();

	var video = document.getElementsByTagName("video");

	console.log(video)

	var tracks = document.getElementsByTagName("track");

		for (var i = 0; i < tracks.length; i++) {
			if ( tracks[i].kind == "subtitles" ) {
				// console.log(tracks[i])
				var listener = tracks[i].addEventListener('cuechange',  function(track){
					// console.log(track.track)
					var  track = track;

					if ( track.track.activeCues ) {

						for (var j = 0; j < track.track.activeCues.length; j++) {

							console.log(track.track.activeCues[j].id)

							if ( track.track.activeCues[j].id != "" ) {

								video_cue.style.color = "green";

							}

							else {

								video_cue.style.color = "white";

							}
						}
					}


				}.bind( null, tracks[i]) )

				eventListeners.push(listener)
			}

		}
}

setTimeout(start, 3000)
