import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {

    const apiAddress = 'https://api.unsplash.com/search/photos';

    const response = await unsplash.get(apiAddress, {
      params: { query: term }
    });

    this.setState({ images: response.data.results });

  }

  render() {
    return (
      <div>
        <SearchBar onSubmitForm={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  };
}

export default App;

