import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: theme.COLORS.BACKGROUND,
    marginBottom: 30
  },
  subContainer: {
    width: '90%',
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
  },
  title: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold'
  }
});