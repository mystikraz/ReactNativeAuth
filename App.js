/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {ActivityIndicator, AsyncStorage} from 'react-native';
import {Router,Scene} from 'react-native-router-flux'


type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }
  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true })
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      )
    }else{
    return (
      <Router>
        <Scene key='root'>
              <Scene
                component={Authentication}
                hideNavBar={true}
                initial={true}
                key='Authentication'
                title='Authentication'
              />
              <Scene
                component={HomePage}
                hideNavBar={true}
                key='HomePage'
                title='Home Page'
              />
          </Scene>
      </Router>
      );
   }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
