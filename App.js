import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

//components
import SearchGifs from './components/SearchGifs';
import GIfGrid from './components/GIfGrid';
export default function App() {
  const [categories , setCategories] =  useState(['Dragon Ball'] )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cool Gifs</Text>

      <SearchGifs setCategories={setCategories}/>

      <FlatList
             showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={category => category}
                renderItem={ (value) => <GIfGrid category={value.item} /> }
            />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154B82',
    padding: 20
  },
  title:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 35,
    

  }
});
