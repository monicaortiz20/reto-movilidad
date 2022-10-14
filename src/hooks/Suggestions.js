import React from 'react'
import {Stylesheet,View,TextInput,FlatList} from 'react';

const Suggestions = (props) => {

    let searchInputRef= undefined
    const handleClick= (item,event) =>  {
        searchInputRef.blur()
        props.on('click',item, event)
    }

  return (
    <View style={styles.suggestionListContainer }>
        <TextInput>
            ref={(ref)=> {searchInputRef=ref}}
            style={styles.searchInput}
            placeholder={props.placeholder}
            onChangeText={props.handleSearchTextChange}
        </TextInput>
        {props.showList && <FlatList style={styles.searchList} keyExtractor={(item,index) => index.toString()} initialNumToRender={5} data={props.suggestionListData} renderItem={({
      item
    }) => <SuggestionListItem onClick={handleClick} item={item}></SuggestionListItem>} />}
  </View>);
}

const styles = StyleSheet.create({
  searchButtons: {
    flexDirection: 'row',
    height: '10%',
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    paddingLeft: 18,
    paddingRight: 18
  },
  searchInput: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1
  },
  suggestionListContainer: {
    width: "90%",
    marginLeft: "5%",
  },
  searchList: {
    width: "95%",
    marginTop: 10,
  }
});

export default Suggestions