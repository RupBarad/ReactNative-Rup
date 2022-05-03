import React, {Component} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert
} from 'react-native';
import {styles} from './FlatListUsingApiScreen.styles';

const listHeader = () => {
  return (
    <View style={styles.header_footer}>
      <Text style={styles.header_text}>Header text</Text>
    </View>
  );
};
const listFooter = () => {
  return (
    <View style={styles.header_footer}>
      <Text style={styles.header_text}> Footer text</Text>
    </View>
  );
};

export default class FlatListUsingApiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      page: 1,
      isLoadMore: true,
    };
  }
  async getData(page) {
    console.log('Fetch data start');
    console.log('page: ' + this.state.page);
    try {
      this.setState({isLoading: true});
      //const response = await fetch('https://reqres.in/api/users?page=' + page);
      const response = await fetch(
        `https://reqres.in/api/users?page=${this.state.page}`,
      );
      const json = await response.json();
      console.log(json.data);
      const array =
        this.state.page === 1 ? json.data : [...this.state.data, ...json.data];
      this.setState({data: array});
      const more = json.total_pages === this.state.page;
      this.setState({isLoadMore: !more});
      // this.setState({
      //   data:
      //     this.state.page === 1
      //       ? json.data
      //       : [...this.state.data, ...json.data],
      // });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
      console.log('fetch data end');
    }
  }
  componentDidMount() {
    this.getData();
  }
  fetchData = () => {
    this.getData();
  };
  loadMore = () => {
    console.log('start on load');

    if(this.state.isLoadMore){
      this.setState(
        {
          page: this.state.page + 1,
        },
        () => this.fetchData(),
      );
    }else{
      console.log('End of pagination');
      ToastAndroid.show('Login successfully !', ToastAndroid.LONG);
      Alert.alert('Alert!','End of pagination');
    }
    
   
  };
  render() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity>
          <View style={styles.main_item_view}>
            <View style={styles.image_container}>
              <Image
                style={styles.image_container}
                source={{uri: item.avatar}}></Image>
            </View>
            <View style={styles.item}>
              <Text> First name: {item.first_name}</Text>
              <Text> Last name: {item.last_name}</Text>
              <Text> Email: {item.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          animating={this.state.isLoading}></ActivityIndicator>
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          onRefresh={this.fetchData}
          keyExtractor={item => item.id}
          refreshing={false}
          ListHeaderComponent={listHeader}
          r
          ListFooterComponent={listFooter}
          onEndReachedThreshold={0.5}
          onEndReached={this.loadMore}
        />
      </View>
    );
  }
}
