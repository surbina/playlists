export default `
  type Playlist {
    id: String,
    name: String,
    tracks: Tracks,
  }

  type Playlists {
    items: [Playlist]
    total: Int
  }
`;
