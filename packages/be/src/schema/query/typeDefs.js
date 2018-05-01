export default `
  type Query {
    artist(id: String): Artist
    artists: Artists
    track(id: String): Track
    tracks: Tracks
    playlist(id: String): Playlist
    playlists: Playlists
  }
`;
