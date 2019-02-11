import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Superhero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=21277e37e39d6f3f204dfe4fd396bec4&hash=b3632c2406d7b260e92e48799b7e8efb")
          .then(res => res.json())
          .then(
            res => {
                const arr = [];
                for (const key in res.data) {
                    arr.push(res.data[key]);
                }
                this.setState({
                  results: arr[4],
                });
            },
          )
      }

    renderHero() {
        const arr2 = [];
        const thumbnail = [];
        for (let i = 0; i < this.state.results.length; i++) {
            for (let key in this.state.results[i]) {
                arr2.push(this.state.results[i][key]);
            }
            for (let key in arr2[4]) {
                thumbnail.push(arr2[4][key]);
            }
        }
        return (
            <div className="hero-container">
                    <div>
                        <img src={thumbnail[0] + "." + thumbnail[1]} alt="thumbnail" />
                        <h1>{arr2[1]}</h1>
                    </div>
            </div>
        );
    }

    render() {
          return (
            <div>
                {this.renderHero()}
            </div>
          );
    }
}


Superhero.propTypes = {
  results: PropTypes.array
};

export default Superhero;