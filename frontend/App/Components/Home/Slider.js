import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'

export default function Slider() {
    const [sliderList, setSliderList] = useState();
    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = () => {
        GlobalApi.getSlider().then(response => {
            setSliderList(response.data.data)
        })
    }
    return (
        <View style={{
            marginTop: 10,
        }}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.attributes.Image.data.attributes.url }}
                        style={{
                            width: Dimensions.get('screen').width * 0.9,
                            height: 170,
                            borderRadius: 10,
                            margin: 2
                        }}
                    />
                )}
            />
        </View>
    )
}
