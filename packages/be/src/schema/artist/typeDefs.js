export default `
  type Artist {
    id: String,
    name: String,
    description: String,
    tracks: Tracks,
  }

  type Artists {
    items: [Artist],
    total: Int,
  }
`;
