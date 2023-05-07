import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from 'components/Layout/Layout';
import fetchApi from 'components/ApiService/ApiService';
import Searchbar from 'components/Searchbar/Searchbar';
import LoadMoreBtn from 'components/Button/Button';

class App extends Component {
  state = {
    searchName: '',
    page: 1,
    fetchApi: [],
  };

  formHandlerSubmit = searchName => {
    this.setState({ searchName, page: 1, fetchApi: [] });
  };

  onChangePageNumber = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.formHandlerSubmit} />
        <Toaster position="top-right" />
        <LoadMoreBtn addPage={this.onChangePageNumber} />
      </Layout>
    );
  }
}

export default App;
