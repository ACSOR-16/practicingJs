function managePlayList(playlist, newSong) {
  playlist.shift();
  playlist.unshift(newSong);
  console.log(playlist);
}

const initialPlaylist = ["Sweater W", "Arabella"];

managePlayList(initialPlaylist, "adults")