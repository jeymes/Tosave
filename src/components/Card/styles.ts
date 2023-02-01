import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { Bold } from 'react-native-feather';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 80,
    borderWidth: 1,
    borderColor: theme.COLORS.SUBTEXT,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  subContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerInfo: {
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: theme.COLORS.TITLE,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: 'bold',
  },
  description: {
    color: theme.COLORS.SUBTEXT,
    fontSize: theme.FONT_SIZE.SM,
    fontWeight: '500',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '28%',
  }
});