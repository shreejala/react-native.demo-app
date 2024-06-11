import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    marginRight: 10,
  },
  clearStyle: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
  },
  clearTextStyle: {
    fontSize: 18,
    color: 'red',
  },
  listStyle: {
    padding: 15,
    paddingTop: 0,
  },
});
