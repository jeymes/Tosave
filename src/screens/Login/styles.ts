import  { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { Rows } from 'phosphor-react-native';

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
  title: {
    fontSize: theme.FONT_SIZE.XX,
    color: theme.COLORS.PRIMARY,
    fontWeight: '900',
    marginBottom: 60
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    flexDirection: 'row'
  },
  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  subContainerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: '#0005'
  },
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 350,
    height: 340,
    backgroundColor: theme.COLORS.BACKGROUNDMODAL,
    borderRadius: 10
  },
  containerInputModal:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  containerButtonModal:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: 30,
    marginTop: 30,
  },
  buttonX:{
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '90%',
    paddingTop: 5
  },
  textModal: {
    fontSize: theme.FONT_SIZE.XL,
    color: theme.COLORS.PRIMARY,
    fontWeight: '700',
  },
  textX: {
    fontSize: theme.FONT_SIZE.XL,
    color: theme.COLORS.TEXT,
    fontWeight: '700',
  },
});
