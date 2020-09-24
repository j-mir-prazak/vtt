document.getElementById("subtitles").track.oncuechange = function() {
  console.log("next sub")
	if (document.getElementById("subtitles").track.activeCues.length > 0) {
		for ( var i = 0; i < document.getElementById("subtitles").track.activeCues.length; i++ ) {
			 if ( document.getElementById("subtitles").track.activeCues[i].id == "blue") {
					document.styleSheets[0].rules.valueOf("video::cue") = "blue"
					}
			else {
				document.styleSheets[0].rules.valueOf("video::cue") = "yellow"
				}
			}

		}
}
