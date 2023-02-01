import  { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.COLORS.BACKGROUND,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  containerText: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
   text: {
    color: theme.COLORS.SUBTEXT,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: '400',
  },
});
