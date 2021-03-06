import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import Third from './Third'
import GiftedListView from 'react-native-gifted-listview'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _press (id) {
    const { navigator } = this.props
    if(navigator) {
      navigator.push({
        name:'third',
        component: Third,
        params: {
          id: id
        }
      })
    }
  }

  _renderRowView (rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={(rowData) => this._press(rowData)}
        >
        <Text>{rowData}</Text>
      </TouchableHighlight>
    )
  }

  _onFetch (page = 1, callback, options) {
    setTimeout(() => {
      var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)]
      if (page === 5) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        })
      } else {
        callback(rows);
      }
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          pagination={true}
          refreshable={true}
          withSections={false}
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
          refreshableTintColor='blue'>
        </GiftedListView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  item: {
    backgroundColor: '#FFF',
  },
  row: {
    padding: 10,
    height: 44,
  }
})

export default Home