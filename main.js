let playBtn = $(".play button");
let playIcon = $(".fa-play");
let musicPlayer = $("#musicPlayer");
let playPauseTimeout;

function playBtnAction() {
  playIcon.addClass('shrink');
  if (playPauseTimeout) {
    clearTimeout(playPauseTimeout);
  }
  playPauseTimeout = setTimeout(function() {
    playIcon.toggleClass('fa-pause');
    playIcon.removeClass('shrink');
  }, 125)
}


playBtn.click(playBtnAction);
