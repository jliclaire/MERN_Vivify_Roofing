import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["checkOne", "checkTwo", "checkThree", "checkFour"];

const LISTS = [
  { name: "checkOne", text: "Check the pitch/fall" },
  { name: "checkTwo", text: "Skylights" },
  { name: "checkThree", text: "Sizing of the gutters" },
  { name: "checkFour", text: "Need carpentry" }
];

class MetalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }

  handleCheckboxChange = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  createCheckbox = option => (
    <Checkbox
      name={option.name}
      isSelected={this.state.checkboxes[option.name]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option.name}
    >
      {option.text}
    </Checkbox>
  );

  createCheckboxes = () => LISTS.map(this.createCheckbox);

  // loop through the state, if all values are true, call checkListStatus()
  // selectAll = () => {
  //   const array = Object.keys(this.state.checkboxes).filter(
  //     checkbox => this.state.checkboxes[checkbox]
  //   );
  //   return array;
  // };

  componentDidUpdate() {
    // console.log("componentDidUpdate");
    // let checkedArray = this.selectAll();
    // console.log(checkedArray);
    // this.props.checkListStatus(checkedArray);

    console.log("componentDidUpdate");
    const checkedArray = Object.keys(this.state.checkboxes).filter(
      checkbox => this.state.checkboxes[checkbox]
    );
    if (checkedArray.length === 4) {
      console.log("four calls");
      this.props.checkListStatus();
    }
  }

  // selectAll = () => {
  //   const checkedArray = Object.keys(this.state.checkboxes).filter(
  //     checkbox => this.state.checkboxes[checkbox]
  //   );
  //   console.log(checkedArray);
  //   if (checkedArray.length === 4) {
  //     this.props.checkListStatus();
  //   } else {
  //     return null;
  //   }
  // };

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  //   let checkedArray = this.selectAll();
  //   console.log(checkedArray);

  // }

  render() {
    return <div className="checkbox-list">{this.createCheckboxes()}</div>;
  }
}

export default MetalList;
