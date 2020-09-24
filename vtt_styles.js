var eventListeners = new Array();


var video_rule;
function findRule() {

	for ( var i = 0; i < document.styleSheets.legnth; i++ ) {

		var sheet = document.styleSheets[i]

		for ( var j = 0; j < sheet.rules.length; j++ ) {
					var rule = sheet.rules[j]
					if ( rule.selectorText && rule.SelectorText.match("video::cue") ) {
						console.log(rule)
						video_rule = rule
					}

		}

	}



}


function start() {

	findRule();

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

								rule.style.color = track.track.activeCues[j].id;

							}

							else {

								rule.style.color = "white";

							}
						}
					}


				}.bind( null, tracks[i]) )

				eventListeners.push(listener)
			}

		}
}

setTimeout(start, 3000)
