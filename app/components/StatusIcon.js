var React = require('react-native');

var {
    View
} = React;

export default class StatusIcon extends React.Component {
    render() {

        let composedStyle = Object.assign({}, styles.status, this.props.style);

        return(
            <View style={composedStyle}></View>
        );
    }
}

var styles = {
  status: {
    height: 12,
    width: 12,
    backgroundColor: "#f00",
    borderRadius: 6,
  }
};
