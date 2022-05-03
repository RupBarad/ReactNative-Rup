import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main_item_view: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    height: 150,
    backgroundColor: 'cornflowerblue',
    flexDirection: 'row',
  },
  image_container: {
    height: 100,
    width: 100,
    margin: 10,
  },
  item: {
    flexDirection: 'column',
  },
  header_footer: {
    backgroundColor: 'cadetblue',
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header_text:{
    fontSize:30,
    textAlign:'center',
    backgroundColor:'green',
    color:'white'
  },
});
