import React from 'react';
import axios from 'axios';
import './SearchContainer.css';

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestionList: [],
    };
  }

  inputHandler = (e) => {
    if (e.target.value.length >= 3) {
      const data = {
        'search-query': e.target.value,
      }
      const options = {
        headers: {
          Authorization: `Bearer`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          id: 'squareyard',
        },
      };
      axios.post('https://saas-api.galaktic.co:8443/web-b2c/open/solr-search/v1.3/auto-suggestion', data, options)
      .then(res => {
        this.setState({
          suggestionList: res.data.object,
        })
      })
    } else {
      this.setState({
        suggestionList: [],
      })
    }
  }

  render() {
    const { suggestionList } = this.state;
    return (
      <div className="">
        <header className="search-title">
          Search
        </header>
        <div className="search-input">
          <input type="text" onChange={(e) => this.inputHandler(e)}/>
        </div>
        <div className="search-suggestions-container">
          {
            suggestionList.length ?
            suggestionList.map((item, id) => {
              return <div className="search-suggestions" key={id}>{item.suggestion}</div>
            }) : null
          }
        </div>
      </div>
    );
  }
}

export default SearchContainer;