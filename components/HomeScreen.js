import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.texto}>Tela 1</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize:22
    }
})