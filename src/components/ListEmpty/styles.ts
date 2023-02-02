import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAnimation: {
    width: 200,
    height: 200,
  },
   text: {
    color: theme.COLORS.SUBTEXT,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: '400',
  },
});