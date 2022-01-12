var playlist = WaveformPlaylist.init({
  container: document.getElementById("playlist")
});

playlist.load([
  {
    "src": "media/BassDrums30.mp3"
  }
]).then(function() {
  //can do stuff with the playlist.
});
