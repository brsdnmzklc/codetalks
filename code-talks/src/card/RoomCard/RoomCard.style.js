import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: height / 3,
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Honeydew,
  },
  title: {
    fontSize: 20,
    color: colors.ImperialRed,
  },
});
