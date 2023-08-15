import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainCardContainer: {
    width: 330,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FCEDDA',
    borderRadius: 15,
    shadowColor: '#71797E',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: '#EE4E34',
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: '700',
    padding: 15,
  },
  icon: {
    justifyContent: 'flex-end',
  },
  flexPlaceholder: {
    flex: 0.2,
  },
  backButton: {
    marginTop: 20,
  },
  contentContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});

export default styles;
