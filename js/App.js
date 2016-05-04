import React, { Component } from 'react';
import MovieList from './components/MovieList';
import MovieRow from './components/MovieRow';
import MovieDetails from './components/MovieDetails';
import Toolbar from './components/Toolbar';
import load from './load';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: ''
    };

    this.loadData();
  }

  loadData() {
    load(this.props.data).then(moviesData => {
      this.initialData = JSON.parse(moviesData);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-sm-12">
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <MovieDetails data={this.state.data} active={this.state.active} />
          </div>
          <div className="col-sm-4 col-md-8 col-lg-8">
            <MovieList
              data={this.state.data}
              update={this.updateData.bind(this)}
              active={this.state.active} />
          </div>
        </div>

      </div>
    );
  }
}
