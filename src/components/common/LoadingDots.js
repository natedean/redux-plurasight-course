import React, { PropTypes } from 'react';

class LoadingDots extends React.Component {

  constructor(props) {
    super(props);

    this.state = {frame: 1};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const numDots = this.state.frame % (this.props.dots + 1);
    const dots = Array.apply(null, {length: numDots}).map(Number.call, Number);
    const text = dots.reduce((acc) => acc + '.', '');
    return <span>{text}&nbsp;</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default LoadingDots;
