var React = require("react-native");

var {
    Component,
    StyleSheet,
    NavigatorIOS,
    StatusBarIOS,
    View,
    Text,
    ListView,
    TouchableHighlight,
} = React;

import StatusIcon from "../components/StatusIcon";
import ServerView from "./ServerView"

var scaleway = require('scaleway/lib/client');

export default class ServerListView extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
          dataSource: ds,
          loaded: false,
        };
    }

    componentDidMount() {
        var client = new scaleway();

        client.setConfig({
            api_endpoint: "https://api.scaleway.com/",
            dry_run: false,
            organization: "XXX",
            token: "XXX"
         });

        client.get('/servers', (err, res) => {

            let ds = this.state.dataSource;

            this.setState({
                dataSource: ds.cloneWithRows(res.body.servers),
                loaded: true,
            })
        });
    }

    _pressRow(server) {
       this.props.navigator.push({
        title: server.name,
        component: ServerView,
        passProps: {server: server}
      });
    }

    renderServerItem(server) {
        return(
            <TouchableHighlight onPress={() => this._pressRow(server)}>
                <View style={styles.serverItem}>
                    <StatusIcon style={{alignSelf: "center"}} />
                    <View style={{alignSelf: "center", paddingLeft: 10, flex:2}}>
                        <Text style={{fontWeight: "bold"}}>{server.name}</Text>
                        <Text>{server.image.name}</Text>
                    </View>
                    <View style={{alignSelf: "center", paddingLeft: 10}}>
                        <Text style={{fontWeight: "bold", textAlign:'right'}}>512MB</Text>
                        <Text>192.168.1.2</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return(
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderServerItem.bind(this)}
              style={styles.listView}
            />
        )

    }
}

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    flex: 1,
  },
  serverItem: {
    flex: 1,
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: '#ff0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 0.5,
  },
});
