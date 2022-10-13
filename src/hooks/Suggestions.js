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
        {props.showList && <FlatList style={styles.searchList} keyExtractor={(item,index) => index.toString()}></FlatList>}

    </View>
  )
}

export default Suggestions