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

  itemAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  item: {
    marginTop: 8,
    backgroundColor: '#FFF',
    //marginBottom: 16,
    //opacity: 0.8,
    //justifyContent: 'flex-end',
  },

  bgImage: {
    //flex: 1,
    paddingTop: 24,
    //flex: 1,
    //resizeMode: 'cover',
    justifyContent: 'flex-end',
    //width: '100%',
    height: 250,
  },

  itemProperty: {
    padding: 8,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
  },

  itemValue: {
    paddingRight: 8,
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
  },

  controleCarrinho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  details: {
    backgroundColor: '#FFF',
    padding: 8,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  detailsTitle: {
    color: '#888888',
    fontSize: 16,
    fontWeight: 'bold',
  },

  detailsText: {
    color: '#888888',
    fontSize: 14,
  },

  confirmar: {
    backgroundColor: '#5082C9',
    borderRadius: 8,
  },

  textoBotao: {
    color:'#FFF',
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});