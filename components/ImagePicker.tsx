import { Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Text, View } from './Themed';

export default function PickImage() {
    return (
        <View>
            <Button 
            title="Take Image to Translate"
            onPress={takeImage}
            />
            <Button
                title="Open Image from library to Translate"
                onPress={pickImage}
            />
        </View>
    );
}

const pickImage = async () => {
    const permissions = (await ImagePicker.getMediaLibraryPermissionsAsync()).granted;

    if (!permissions) {
        const permRes = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permRes.granted) {
            Alert.alert(
                "Could not access photo library",
                "Please grant photo access to this app in settings",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    {
                        text: "OK"
                    }
                ]
            );
            return;
        }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false
    });
    console.log(result);
}

const takeImage = async () => {
    const permissions = (await ImagePicker.getCameraPermissionsAsync()).granted;

    if (!permissions) {
        const permRes = await ImagePicker.requestCameraPermissionsAsync();
        if (!permRes.granted) {
            Alert.alert(
                "Could not access camera",
                "Please grant Camera permissions to this app in settings",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    {
                        text: "OK"
                    }
                ]
            );
            return;
        }
    }
    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    console.log(result);
};