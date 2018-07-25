import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {
  renderItem(library) {
    // library.item bc the library passed in through the keyExtractor has three parts:
    // 1.index 2.item 3.seperator. item is what has all the data, so passing in
    // library.item allows us to use this.props.library.title in ListItem.js
    return <ListItem library={library.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => `${library.id}`}
      />
    );
  }
}

// maps the redux state to the props of LibraryList
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// gets the state from the Provider which lets it be used for mapStateToProps,
// then adds the prop to LibraryList
export default connect(mapStateToProps)(LibraryList);