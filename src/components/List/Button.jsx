import React, {Component} from 'react';

class Button extends Component {
  
  render() {
    return (
      <div className={`simple-list__button ${this.props.className}`}
           onClick={this.props.onClick}
           title={this.props.title}>
        {this.props.caption}
      </div>
    );
  }
}

Button.propTypes = {
  className: React.PropTypes.string,
  onClick:   React.PropTypes.func,
  caption:   React.PropTypes.string,
  title:     React.PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick:   () => {},
  caption:   '',
  title:     ''
};

export default Button;