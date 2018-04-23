export default `
  type Artist {
    id: String,
    name: String,
    description: String,
    tracks: [Track],
  }

  type Artists {
    items: [Artist],
    total: Int,
  }
`;
