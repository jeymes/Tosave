import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  subContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});