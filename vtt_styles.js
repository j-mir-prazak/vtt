


var tracksSet = new Array();
var video_cue;
var video_webkit;

function findRule() {
	for ( var i = 0; i < document.styleSheets.length; i++ ) {
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

function changeColor(track, cue) {
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
}


function start() {
	var video_cue = findRule();
	var tracks = document.getElementsByTagName("track");
		for (var i = 0; i < tracks.length; i++) {
			if ( tracks[i].kind == "subtitles" && tracksSet.indexOf(tracks[i]) == -1 ) {
				// console.log(tracks[i])
				tracks[i].addEventListener('cuechange',  function(track) {
					changeColor( track )
				}.bind(null, tracks[i]))
				tracksSet.push(tracks[i])

			}
			if ( tracksSet.indexOf(tracks[i]) != -1 ) console.log("set already")
		}
}

var waiter = setInterval(function() {
	var video = document.getElementsByTagName("video");
	if ( video.length > 0 ) {
		clearInterval(waiter)

		video[0].textTrack.addEventListener('change', function() {
			start()
		})

	 }
}, 100)
