import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'; // Removed duplicate import and unnecessary imports
import imagePath from '../constants/imagePath';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function HeaderComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={imagePath.backIcon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    
        marginTop: moderateScale(25),
        marginLeft: moderateScale(14),
    }
});
