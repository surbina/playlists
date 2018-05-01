export default `
  type Track {
    id: String,
    name: String,
    artist: Artist,
    album: String,
  }

  type Tracks {
    items: [Track]
    total: Int
  }
`;
