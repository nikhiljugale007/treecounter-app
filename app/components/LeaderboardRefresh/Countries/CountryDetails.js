import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import CountryLoader from '../../Common/ContentLoader/LeaderboardRefresh/CountryLoader';
import styles from '../../../styles/LeaderboardRefresh/Countries/CountryLeaderboardStyle';
import i18n from '../../../locales/i18n';
import { delimitNumbers } from '../../../utils/utils';
import { LeaderBoardDataAction } from '../../../actions/exploreAction';
import { getLocalRoute } from '../../../actions/apiRouting';
import { getImageUrl } from '../../../actions/apiRouting';
import Header from '../../Header/BackHeader';

const CountryDetails = ({ navigation }) => {
  const [queryresult, setQueryResult] = useState(null);
  const [period, setPeriod] = useState('1w');
  const [section, setSection] = useState('');
  const [orderBy] = useState('planted');

  useEffect(
    () => {
      const section = navigation.getParam('section');
      const subSection = navigation.getParam('subSection');
      const caption = navigation.getParam('caption');
      setQueryResult(null);
      setSection(caption);
      console.log(section, subSection, caption, 'Sections');
      LeaderBoardDataAction({
        section,
        orderBy: orderBy,
        period: period,
        subSection: subSection
      }).then(
        success => {
          if (
            success.data &&
            success.data instanceof Object &&
            success.data.data
          )
            setQueryResult(success.data.data);
        },
        error => {
          console.log(error);
        }
      );
    },
    [period]
  );

  const renderList = () => {
    if (queryresult) {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={queryresult}
          renderItem={({ item, index }) => {
            const isPrivate = 'mayPublish' in item && !item.mayPublish;
            return (
              <TouchableOpacity
                onPress={() => {
                  !isPrivate
                    ? onPressListItem(item.treecounterId, item.caption)
                    : undefined;
                }}
                style={styles.oneContryContainer}
              >
                <View style={styles.indexContainer}>
                  <Text style={styles.indexText}>{index + 1}</Text>
                </View>
                <View style={styles.countryFlagContainer}>
                  <Image
                    style={styles.countryFlagImage}
                    source={{
                      uri: getImageUrl(
                        'profile',
                        'avatar',
                        item.contributorAvatar
                      )
                    }}
                  />
                </View>
                <View style={styles.countryBody}>
                  <Text numberOfLines={2} style={styles.countryNameText}>
                    {item.caption}
                  </Text>
                  <Text style={styles.tressCounter}>
                    {delimitNumbers(item.planted)}{' '}
                    <Text style={styles.tressText}>
                      {i18n.t('label.trees')}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      );
    } else {
      return (
        <>
          <CountryLoader />
          <CountryLoader />
          <CountryLoader />
        </>
      );
    }
  };
  const onPressListItem = (treeCounterId, title) => {
    if (treeCounterId) {
      navigation.navigate(getLocalRoute('app_treecounter'), {
        treeCounterId,
        titleParam: title
      });
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headingAndSubHeadeingContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{section}</Text>
          </View>
          <View>
            <Text style={styles.subHeaderText}>
              {i18n.t('label.lbr_c_d_leaderboard')}
            </Text>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.timeLineContentContainerStyle}
          style={styles.timeLineContainer}
        >
          <TouchableOpacity
            onPress={() => setPeriod('1w')}
            style={
              styles[period == '1w' ? 'activeChipContainer' : 'chipContainer']
            }
          >
            <Text
              style={styles[period == '1w' ? 'activeChipText' : 'chipText']}
            >
              {i18n.t('label.lbr_c_d_this_week')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPeriod('1y')}
            style={
              styles[period == '1y' ? 'activeChipContainer' : 'chipContainer']
            }
          >
            <Text
              style={styles[period == '1y' ? 'activeChipText' : 'chipText']}
            >
              {i18n.t('label.lbr_c_d_year')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPeriod('all')}
            style={
              styles[period == 'all' ? 'activeChipContainer' : 'chipContainer']
            }
          >
            <Text
              style={styles[period == 'all' ? 'activeChipText' : 'chipText']}
            >
              {i18n.t('label.lbr_c_d_all_time')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.countriesListContainer}>{renderList()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryDetails;