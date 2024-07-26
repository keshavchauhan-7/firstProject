import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window');

const QuestionItem = ({ data }) => {
    return (
        <View style={{ width: width }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 600,
                    color: 'black',
                    marginLeft: 20,
                    marginRight: 20
                }}>
                {'Ques : ' + data.question}
            </Text>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={data.Options}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: '90%',
                                    height: 50,
                                    elevation: 3,
                                    backgroundColor: 'white',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    flexDirection: 'row'
                                }}>

                                <View style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    backgroundColor: 'cyan',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{ fontWeight: 600 }}>
                                        {index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'}
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 10 }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default QuestionItem