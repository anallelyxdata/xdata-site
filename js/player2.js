
	let playpause_btn = document.querySelector(".playpause-track");

			let seek_slider = document.querySelector(".seek_slider");
			let curr_time = document.querySelector(".current-time");
			let total_duration = document.querySelector(".total-duration");

			let track_index = 0;
			let isPlaying = false;
			let updateTimer;

	    // Create new audio element
	    let curr_track = document.createElement('audio');

	    // Define the tracks that have to be played
	    let track_list = [
	    {
	    	path: "video/data-shot.mp3"
	    }
	    ];

	

	    function loadTrack(track_index) {
	    	clearInterval(updateTimer);
	    	resetValues();

	      // Load a new track
	      curr_track.src = track_list[track_index].path;
	      curr_track.load();

	      // Set an interval of 1000 milliseconds for updating the seek slider
	      updateTimer = setInterval(seekUpdate, 1000);

	  }

	    // Reset Values
	    function resetValues() {
	    	curr_time.textContent = "00:00";
	    	total_duration.textContent = "00:00";
	    	seek_slider.value = 0;
	    }

	    function playpauseTrack() {
	    	if (!isPlaying) playTrack();
	    	else pauseTrack();
	    }

	    function playTrack() {
	    	curr_track.play();
	    	isPlaying = true;

	      // Replace icon with the pause icon
	      playpause_btn.innerHTML = '<img src="img/pause@2x.png" alt="">';
	  }

	  function pauseTrack() {
	  	curr_track.pause();
	  	isPlaying = false;

	      // Replace icon with the play icon
	      playpause_btn.innerHTML = '<img src="img/play@2x.png" alt="">';
	  }

	  function seekTo() {
	  	seekto = curr_track.duration * (seek_slider.value / 100);
	  	curr_track.currentTime = seekto;
	  }

	  function seekUpdate() {
	  	let seekPosition = 0;

	      // Check if the current track duration is a legible number
	      if (!isNaN(curr_track.duration)) {
	      	seekPosition = curr_track.currentTime * (100 / curr_track.duration);
	      	seek_slider.value = seekPosition;

	        // Calculate the time left and the total duration
	        let currentMinutes = Math.floor(curr_track.currentTime / 60);
	        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
	        let durationMinutes = Math.floor(curr_track.duration / 60);
	        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

	        // Adding a zero to the single digit time values
	        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

	        curr_time.textContent = currentMinutes + ":" + currentSeconds;
	        total_duration.textContent = durationMinutes + ":" + durationSeconds;
	    }
	}

