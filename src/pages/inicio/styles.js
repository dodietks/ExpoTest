import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 24,
    color: '#737380',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
    marginBottom: 8,
  },

  qrcode: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFF',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  controleBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    right: 0,
    left: 0,
    padding: 8,
    paddingRight: 16, 
    //flex: 1,
    //justifyContent: 'flex-end',
    marginTop: 8,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  }, 

  botao: {
    borderRadius: 8,
    marginLeft: 8,
  },
});