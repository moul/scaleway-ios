var React = require("react-native");

var {
    Component,
    StyleSheet,
    ListView,
    View,
    Text,
    StatusBarIOS,
} = React;

export default class ServerListView extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
          dataSource: ds.cloneWithRows(this.dummyServers()),
          loaded: false,
        };
    }

    renderServerItem(rowData) {
        return(
            <View style={styles.serverItem}>
                <Text>{rowData}</Text>
            </View>
        );
    }

    dummyServers(pressData) {
        var dataBlob = [];
        for (var i = 0; i < 100; i++) {
            dataBlob.push('Server ' + i);
        }
        return dataBlob;
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
