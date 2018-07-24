import gql from 'graphql-tag';

const ALL_PLAYLISTS_QUERY = gql`
  query {
    playlists {
      id
      name
      genre
    }
  }
`;

const PLAYLIST_QUERY = gql`
  query($id: ID) {
    playlist(id: $id) {
      name
      genre
    }
  }
`;

const ADD_PLAYLIST_MUTATION = gql`
  mutation($name: String, $genre: String) {
    addPlaylist(name: $name, genre: $genre) {
      id
      name
      genre
    }
  }
`;

const EDIT_PLAYLIST_MUTATION = gql`
  mutation($id: ID, $name: String, $genre: String) {
    updatePlaylist(id: $id, name: $name, genre: $genre) {
      id
      name
      genre
    }
  }
`;

export {
  ALL_PLAYLISTS_QUERY,
  PLAYLIST_QUERY,
  ADD_PLAYLIST_MUTATION,
  EDIT_PLAYLIST_MUTATION,
};
