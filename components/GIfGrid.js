import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Share } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFetchGifs } from '../UseFetchGifs';

export default function GIfGrid({ category }) {
    const {data:images , loading} = useFetchGifs(category) 

    const shareGif = async url => {

        try {
            const result = Share.share({
                message: url,
                url
            });

            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
      
    }

    return (
        <View style={styles.container}>
            <Text style={styles.category}>
                {
                    category
                }
            </Text>

            { 
             loading ? <Text>Cargando gifs.. </Text> : <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                            data={images}
                            keyExtractor={category => category.id}
                            renderItem={ ({item}) => <TouchableOpacity onPress={() => shareGif(item.url)}>
                                <Image
                                source={{ uri: item.url }}
                                style={styles.gif}
                                /> 
                            </TouchableOpacity>
                        }
                        />
         }
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        overflow: 'hidden'
    },

    category: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 30, 
        fontSize: 22
    },

    gif:{
        width: '100%',
        height: 200,
        marginBottom: 20, 
    }
})