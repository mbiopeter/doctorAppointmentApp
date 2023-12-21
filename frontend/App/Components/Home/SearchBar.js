import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={{
      marginTop: 15
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: Colors.GRAY,
        padding: 6,
        borderRadius: 8

      }}>
        <EvilIcons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder='Search' style={{
          width: '100%',
          fontFamily: 'appfont'
        }}
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
        />
      </View>
    </View>
  )
}