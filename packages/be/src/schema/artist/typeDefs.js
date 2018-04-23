export default `
  type Artist {
    id: String,
    name: String,
    description: String,
  }

  type Artists {
    items: [Artist],
    total: Int,
  }
`;
