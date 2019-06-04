import React, { Component } from "react";
import "./App.css";
import NavBar from './components/navbar/navbar'
import PicCard from './components/piccard/piccard'
import cartoon from "./cartoons.json";


class App extends Component {

  state = {
    cartoon,
    clickedCartoon: [],
    score: 0
  };

  imageClick = event => {

    const currentCartoon = event.target.id;
    const CartoonAlreadyClicked =
      this.state.clickedCartoon.indexOf(currentCartoon) > -1;
    console.log(currentCartoon);
    console.log("Target Id : " + event.target.id);
    console.log(this.state.clickedCartoon);

    if (CartoonAlreadyClicked) {
      this.setState({
        fish: this.state.cartoon.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCartoon: [],
        score: 0
      });
      alert("You lose. Play again?");

    }

    else {

      this.setState(
        {
          cartoon: this.state.cartoon.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedCartoon: this.state.clickedCartoon.concat(
            currentCartoon
          ),
          score: this.state.score + 1
        },
        () => {
          if(this.state.score === 12) {
            this.setState(
              {
                score: this.state.score
              }
            )

          alert("you win!");
          this.setState(
            {
              cartoon: this.state.cartoon.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedCartoon: [],
              score: 0
            }
          )

        }
      }
      )

      console.log("score : " + this.state.score);
    }

  }


  render() {
    console.log("length:" + cartoon.length);
    return (
      <div className="App">
        <NavBar score={this.state.score} />

        <div className="container">
          {this.state.cartoon.map(cartoon => (
            <PicCard
              imageClick={this.imageClick}
              id={cartoon.id}
              key={cartoon.id}
              image={cartoon.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
