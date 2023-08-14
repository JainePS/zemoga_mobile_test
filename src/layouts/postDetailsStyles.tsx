import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    width: 330,
    height: 'auto',
    justifyContent: 'center',
    backgroundColor: '#FCEDDA',
    borderRadius: 15,
    shadowColor: '#71797E',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  postContent: {
    padding: 10,
    flexDirection: 'column',
  },
  postText: {fontSize: 16, fontWeight: 'normal', padding: 10},
});

export default styles;
