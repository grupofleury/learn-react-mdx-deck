const GET_DOG = gql`
  query Dog($breed: BreedType!) {
    dog(breed: $breed) {
      id
      breed
      displayImage
    }
  }
`