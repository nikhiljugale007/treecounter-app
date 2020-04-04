import React, { Component } from 'react';
import { debug } from '../../debug';
import { LargeMenuItem } from '../Menu/MenuItem.native';
import { ScrollView, View, Linking, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import i18n from '../../locales/i18n';
import { withNavigation } from 'react-navigation';
import { updateRoute } from '../../helpers/routerHelper/routerHelper.native';
// import TabContainer from '../../containers/Menu/TabContainer';
const LicenseInfo = require('./LicenseInfo.json');
import HeaderNew from './../Header/HeaderNew.native';
import colors from '../../utils/constants';

//Run license-checker --production  --json > license.json to fetch license info from package.json:
//Copy paste required and specific license info in LicenseInfo.json file under app or web specific
class AboutUs extends Component {
  // open your gateway
  openGateWay = async url => {
    /*
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err)
      );
    }
*/
    Linking.openURL(url).catch(err => debug('Cannot open URI', err));
  };

  render() {
    const version = DeviceInfo.getReadableVersion();
    // const buildNumber = DeviceInfo.getBuildNumber();
    return (
      <View style={{ flex: 1, backgroundColor: colors.WHITE }}>
        <HeaderNew
          title={i18n.t('label.information')}
          navigation={this.props.navigation}
        />

        <ScrollView style={{ marginTop: Platform.OS === 'ios' ? 160 : 120 }}>
          <LargeMenuItem
            onPress={() => {
              //  debug('open change log');
            }}
            title={version}
          />
          <LargeMenuItem
            onPress={() => {
              updateRoute('app_privacy', this.props.navigation, null);
            }}
            title={i18n.t('label.data_protection')}
          />
          <LargeMenuItem
            onPress={() => {
              updateRoute('app_imprint', this.props.navigation, null);
            }}
            title={i18n.t('label.imprint')}
          />
          <LargeMenuItem
            onPress={() => {
              // debug('open Third party here');
              //TODO: this a is temporary solution until someone fixes the LicenseInfo component and updates LicenseInfo.json
              // this.openGateWay(
              //   'https://github.com/Plant-for-the-Planet-org/treecounter-app/network/dependencies'
              // );
              this.props.navigation.navigate('license_info_list', {
                licenseList: LicenseInfo
              });
            }}
            title={i18n.t('label.open_source_license')}
          />
        </ScrollView>
        {/* <TabContainer {...this.props} /> */}
      </View>
    );
  }
}

export default withNavigation(AboutUs);
