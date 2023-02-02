import  { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  subContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  containerRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  title: {
    fontSize: theme.FONT_SIZE.XX,
    color: theme.COLORS.PRIMARY,
    fontWeight: '900',
    marginBottom: 60
  },
  text: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.TEXT,
    fontWeight: '500',
    marginTop: 50
  },
  containerAnimation: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
