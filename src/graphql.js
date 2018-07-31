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
      id
      name
      genre
    }
  }
`;

const PLAYLIST_QUERY_WITH_MUSICS = gql`
  query($id: ID) {
    playlist(id: $id) {
      id
      name
      genre
      musics {
        id
        name
        url
        wrongAnswers
      }
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

const MUSIC_QUERY = gql`
  query($id: ID) {
    music(id: $id) {
      id
      name
      url
      wrongAnswers
    }
  }
`;

const ADD_MUSIC_MUTATION = gql`
mutation($name: String, $url: String, $wrongAnswers: [String]) {
  addMusic(name: $name, url: $url, wrongAnswers: $wrongAnswers) {
    id
    name
    url
    wrongAnswers
  }
}
`;

const EDIT_MUSIC_MUTATION = gql`
mutation($id: ID, $name: String, $url: String, $wrongAnswers: [String]) {
  updateMusic(id: $id, name: $name, url: $url, wrongAnswers: $wrongAnswers) {
    id
    name
    url
    wrongAnswers
  }
}
`;

const ADD_MUSIC_TO_PLAYLIST_MUTATION = gql`
mutation($idPlaylist: ID, $idMusic: ID) {
  addMusicToPlaylist(idPlaylist: $idPlaylist, idMusic: $idMusic) {
    id
  }
}
`;

export {
  ALL_PLAYLISTS_QUERY,
  PLAYLIST_QUERY,
  PLAYLIST_QUERY_WITH_MUSICS,
  ADD_PLAYLIST_MUTATION,
  EDIT_PLAYLIST_MUTATION,
  MUSIC_QUERY,
  ADD_MUSIC_MUTATION,
  EDIT_MUSIC_MUTATION,
  ADD_MUSIC_TO_PLAYLIST_MUTATION,
};
