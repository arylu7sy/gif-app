import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function SearchGifs({ setCategories }) {

    const [inputValue, setInputValue] = useState('')
    
    const handleChangeInput = v =>[
        setInputValue(v)
    ]

    const onEnter = () => {
        if (inputValue.trim().length > 2 ) {
            setCategories(categories => [inputValue , ...categories]) 
            setInputValue('') 
        }
    }

    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Busca un gif"
                value={inputValue}
                onSubmitEditing={() => onEnter()}
                onChangeText={(value) => handleChangeInput(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        padding: 8,
        paddingLeft: 10,
        marginTop: 28,
        marginBottom: 30, 
        borderRadius: 10,
    }
})