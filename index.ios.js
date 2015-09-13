/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  TabBarIOS,
} = React;

import ServerListView from "./app/views/ServerListView";

class ScalewayIOS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: "dashboard",
        };
    }

    changeTab(tab) {
        this.setState({
            selectedTab: tab,
        })
    }

    render() {
        return(
            <TabBarIOS>
                <TabBarIOS.Item
                    title="Dashboard"
                    icon={{uri: "dashboard", isStatic: true}}
                    onPress={ () => this.changeTab('dashboard') }
                    selected={ this.state.selectedTab === 'dashboard' }>
                    <View style={ styles.pageView }>
                        <Text>Dashboard</Text>
                    </View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Servers"
                    icon={{uri: "servers", isStatic: true}}
                    onPress={ () => this.changeTab('servers') }
                    selected={ this.state.selectedTab === 'servers' }>

                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={{
                          title: 'My Servers',
                          component: ServerListView,
                        }}
                     />

                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Settings"
                    icon={{uri: "settings", isStatic: true}}
                    onPress={ () => this.changeTab('settings') }
                    selected={ this.state.selectedTab === 'settings' }>
                    <View style={ styles.pageView }>
                        <Text>Settings</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
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
});

AppRegistry.registerComponent('ScalewayIOS', () => ScalewayIOS);
