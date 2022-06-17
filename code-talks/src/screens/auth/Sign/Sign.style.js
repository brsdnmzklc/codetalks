import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ImperialRed,
    padding: 10,
  },
  header: {
    marginVertical: 50,
  },
  headerText: {
    fontSize: 50,
    alignSelf: 'center',
    color: colors.Honeydew,
  },
});
