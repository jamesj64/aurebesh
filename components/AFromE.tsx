import { TextInput, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function AFromE() {
  return(
    <View style={styles.getStartedContainer}>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        defaultValue={"HI"}
        placeholder={"PLACEHOLDER..."}
        placeholderTextColor={"white"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        borderWidth: 2,
        padding: 10,
        borderColor: "white"
    },
    textArea: {
        height: 150,
        width: 200,
        color: "white",
        justifyContent: "flex-start"
    }
});