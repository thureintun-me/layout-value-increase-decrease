import React,{ useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SquareValue = (props) => {
    
    const [count,setText1] = useState(0);
    

    return (
        <View style={styles.container} >
            <View style={styles.buttonContainer} >
                    <SimpleLineIcons name="minus" size={45} color="black" onPress={()=>setText1(count-1)} />
            </View>

            <Text style={styles.textContainer}>{count}</Text>
            <View style={styles.buttonContainer}  >
                <Ionicons name="add-circle-outline" size={55} color="black" onPress={()=>setText1(count+1)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            
            width:'92%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            elevation:8,
            backgroundColor:'white',
            marginLeft:15,
            marginTop:20,
            marginBottom:40,


           
        },
        buttonContainer: {
            
            height: 120,
            padding: 30,

        },
        textContainer: {
            padding:60,
            width: '40%',
            alignSelf: 'center'
        }
    }
)

export default SquareValue;