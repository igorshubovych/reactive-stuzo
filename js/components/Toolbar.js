import React, { Component } from 'react';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { Title: true, Year: true, imdbRating: true };
  }

  sort(type) {
    const { update, data } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;

    const sorted = [].slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.sorted[type] = !isSorted;

    update({
      data: sorted,
      active: 0
    });
  }

  reset() {
    this.props.update({
      data: this.props.initialData,
      term: '',
      active: 0
    });
  }

  render() {
    return (
      <div className="toolbar">
        <button className="btn btn-default" onClick={() => this.sort('Title')}>
          <i className="fa fa-sort-alpha-asc"></i>  Sort by Title
        </button>
        <button className="btn btn-default" onClick={() => this.sort('Year')}>
          <i className="fa fa-sort-alpha-asc"></i>  Sort by Year
        </button>
        <button className="btn btn-default" onClick={() => this.sort('imdbRating')}>
          <i className="fa fa-sort-numeric-desc"></i>  Sort by IMDB rating
        </button>
        <button className="btn btn-warning" onClick={this.reset.bind(this)}>
          <i className="fa fa-ban"></i>  Reset
        </button>
      </div>
    );
  }
}
