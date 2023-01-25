import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  containerInput: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.SUBTEXT,
    fontWeight: '400'
  },
  input: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    color: theme.COLORS.TEXT,
    backgroundColor: '#363636',
    marginTop:5,
    marginBottom: 20,
    paddingLeft: 10
  }
});