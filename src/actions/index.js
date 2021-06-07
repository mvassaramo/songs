// Action creator
export const selectSong = (song) => {
  // return an action (JS object)
  // must have 'type' property
  // payload is optional
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}