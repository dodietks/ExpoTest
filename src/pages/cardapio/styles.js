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

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
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
  },

  itemMenuList: {
    marginTop: 16,
  },

  itemTipeList: {
    marginTop: 16,
  },

  itemAlign: {
    marginTop: 64,
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
    paddingTop: 24,
    //flex: 1,
    //resizeMode: 'cover',
    //justifyContent: 'center',
    //width: '100%',
    //height: '100%',
  },

  itemProperty: {
    padding: 8,
    fontSize: 16,
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

  detailsButton: {
    backgroundColor: '#FFF',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  detailsButtonText: {
    color: '#888888',
    fontSize: 15,
    fontWeight: 'bold',
  },
});