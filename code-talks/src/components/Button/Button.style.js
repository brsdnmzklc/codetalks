import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  button: {
    backgroundColor: colors.Honeydew,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.ImperialRed,
  },
  title: {
    fontSize: 18,
    color: colors.ImperialRed,
    fontWeight: '500',
  },
});
