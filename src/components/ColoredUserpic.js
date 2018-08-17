import React, { Component } from "react";
import "../styles/ColoredUserpic.css";

class ColoredUserpic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.props.colors
    };
  }

  changeHovered = hover => {
    if (hover) {
      this.setState({ colors: this.props.hoverColors });
    } else {
      this.setState({ colors: this.props.colors });
    }
  };

  render() {
    return (
      <div className="coloredUserpic">
        <div
          onMouseOver={this.changeHovered.bind(this, true)}
          onMouseOut={this.changeHovered.bind(this, false)}
          className="box"
          style={{
            height: `${this.props.size +
              this.props.margin +
              this.props.colorWidth}px`,
            width: `${this.props.size +
              this.props.margin +
              this.props.colorWidth}px`,
            padding: `${this.props.colorWidth}px`,
            background: `linear-gradient(to right, ${this.state.colors[0]}, ${this.state.colors[1]})`
          }}
        >
          <img
            alt="avatar"
            className="avatar"
            style={{
              height: `${this.props.size}px`,
              padding: `${this.props.margin}px`,
              backgroundColor: `${this.props.backgroundColor}`
            }}
            src={this.props.src}
          />
        </div>
      </div>
    );
  }
}

export default ColoredUserpic;
