var React = require("react-native");

var {
    Component,
    StyleSheet,
    ListView,
    View,
    Text,
    StatusBarIOS,
} = React;

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

    renderServerItem(server) {
        return(
            <View style={styles.serverItem}>
                <Text>{server.name} - {server.state_detail}</Text>
            </View>
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
    paddingTop: 20,
  },
  serverItem: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
  }
});
