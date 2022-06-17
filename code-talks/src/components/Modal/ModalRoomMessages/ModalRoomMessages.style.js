import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: height / 3,
  },
  inputContainer: {
    flex: 1,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
