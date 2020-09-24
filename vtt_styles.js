var eventListeners = new Array();

function start() {

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

								document.styleSheets[0].rules[document.styleSheets[0].rules.length-1].valueOf("video::cue").style.color = track.track.activeCues[j].id;

							}

							else {

								document.styleSheets[0].rules[document.styleSheets[0].rules.length-1].valueOf("video::cue").style.color = "white";

							}
						}
					}


				}.bind( null, tracks[i]) )

				eventListeners.push(listener)
			}

		}
}

setTimeout(start, 3000)
