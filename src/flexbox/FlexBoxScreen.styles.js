import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  tab: {
    //  flex: 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    borderColor: '#000',
    elevation: 2,
  },
  tab_menu: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
  },
  tab_menu_item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  tab_menu_item_justify: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'green',
  },
  tab_menu_item_test: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'green',
  },
  tab_menu_align_item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'green',
  },
  tab_icon: {
    width: 20,
    height: 20,
    marginEnd: 10,
  },
  powderblue: {
    flex: 1,
    height: 60,
    backgroundColor: 'powderblue',
  },
  skyblue: {
    flex: 1,
    height: 60,
    backgroundColor: 'skyblue',
  },
  steelblue: {
    flex: 1,
    height: 60,
    backgroundColor: 'steelblue',
  },
  location: {
    flexDirection: 'row',
    marginStart: 10,
    paddingVertical: 15,
  },
  location_change: {
    marginEnd: 20,
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
  main_post: {
    flexDirection: 'row',
  },
  post_image: {
    height: 100,
    width: 100,
    backgroundColor: 'cadetblue',
  },
  post_data: {
    flex: 1,
    flexDirection: 'column',
  },
  post_tag: {
    borderColor: 'gray',
    marginStart: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  text_normal: {
    color: 'black',
    fontSize: 16,
  },
  text_normal_bold: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text_big: {
    color: 'black',
    fontSize: 18,
  },
  text_big_bold: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 10,
  },
  text_big_bold_green: {
    color: 'forestgreen',
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 10,
  },
  text_big_gray: {
    color: 'gray',
    fontSize: 16,
  },
  text_normal_gray: {
    color: 'gray',
    fontSize: 14,
    padding: 5,
    flexWrap: 'wrap',
  },
  text_big_gray_strike: {
    color: 'gray',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  text_white: {
    color: 'white',
    fontSize: 14,
  },
  rating: {
    backgroundColor: 'forestgreen',
    padding: 4,
    borderRadius: 5,
  },
});
