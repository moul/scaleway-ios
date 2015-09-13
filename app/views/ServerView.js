var React = require("react-native");

var {
    View, Text
} = React;

import StatusIcon from "../components/StatusIcon";

class Header extends React.Component {
    render() {
        return(
            <View style={{marginTop: 64, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.props.server.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <StatusIcon />
                    <Text style={{marginLeft: 5}}>{this.props.server.state}</Text>
                </View>
            </View>
        );
    }
}

class ServerCard {
    render() {
        return(
            <View style={ styles.pageView }>
                <Header server={this.props.server} />
                <View style={{borderTopWidth: 0.5, backgroundColor: '#4a4a4a', padding: 10, flexDirection: "column"}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>IP</Text>
                    <Text style={{color: '#999'}}>192.168.1.2</Text>
                </View>
                <View style={{borderTopWidth: 0.5, backgroundColor: '#4a4a4a', padding: 10, flexDirection: "column"}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Private IP</Text>
                    <Text style={{color: '#999'}}>{this.props.server.private_ip}</Text>
                </View>
                <View style={{borderTopWidth: 0.5, backgroundColor: '#4a4a4a', padding: 10, flexDirection: "column"}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Created</Text>
                    <Text style={{color: '#999'}}>{this.props.server.creation_date}</Text>
                </View>
            </View>
        );
    }
}

export default class ServerView extends React.Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <ServerCard server={this.props.server} />
                <View style={{paddingHorizontal: 10}}>
                    <View style={{backgroundColor: '#4a4a4a', padding: 10, marginTop: 10, borderRadius: 10}}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Power On</Text>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = {
  pageView: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },

};
