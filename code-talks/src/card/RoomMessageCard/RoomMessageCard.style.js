import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.Honeydew,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  username: {
    fontSize: 18,
  },
  date: {fontSize: 18},
  message: {fontSize: 15},
});
