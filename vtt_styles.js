var eventListeners = new Array();


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
			if ( tracks[i].kind == "subtitles" ) {
				// console.log(tracks[i])
				var listener = tracks[i].addEventListener('cuechange',  changeColor( tracks[i] ) )
				eventListeners.push(listener)
			}
		}
}

var waiter = setInterval(function() {
	var track = document.getElementsByTagName("track");
	if ( track.length > 0 ) {
		clearInteval(waiter)
		start()
	 }
}, 200)
