import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window');

const QuestionItem = ({ data, selectedOption }) => {
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
                                    backgroundColor: data.marked == index + 1 ? 'purple' : 'white',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    flexDirection: 'row'
                                }} onPress={() => {
                                    selectedOption(index + 1);
                                }}>

                                <View style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    backgroundColor: data.marked == index + 1 ? '#fff' :'cyan',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{ fontWeight: 600, color:'#000' }}>
                                        {index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'}
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 10, color:data.marked == index + 1 ? 'white' :'#000' }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default QuestionItem