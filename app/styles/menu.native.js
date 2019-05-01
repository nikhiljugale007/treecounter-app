import EStyleSheet from 'react-native-extended-stylesheet';

export default (menuStyles = EStyleSheet.create({
  outerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1
  },
  imageStyle: {
    paddingLeft: 43,
    paddingBottom: 20
  },
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  topProfileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    width: '100%',
    marginTop: 10
  },
  burgerMenuImageStyle: {
    marginLeft: 10
  },
  profileImageStyle: {
    marginBottom: 10,
    flex: 0.6
  },
  profileTextHeading: {
    fontSize: 13,
    color: '$textColor',
    fontWeight: '600'
  },
  profileText: {
    fontSize: 13,
    color: '$textColor'
  },
  centerMenu: {
    marginTop: 22
  },
  sideNavigationActionMenuContainer: {
    width: '100%'
  }
}));
