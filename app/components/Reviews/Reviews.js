import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SingleReview from './SingleReview';
// import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import { pushStaticRoute } from './../../helpers/routerHelper';
import {
  selectedPlantProjectSelector,
  selectedReviewsSelector,
  currentUserProfileSelector
} from '../../selectors';
import { connect } from 'react-redux';
import { deleteReview } from '../../actions/reviews';
import { bindActionCreators } from 'redux';
import i18n from '../../locales/i18n.js';
import NumberFormat from '../Common/NumberFormat';

class Reviews extends Component {
  constructor(props) {
    super(props);
    console.log('reviews props:', props);

    this.state = {};
  }
  isReviewer() {
    return (
      this.props.currentUserProfile && this.props.currentUserProfile.isReviewer
    );
  }
  async deleteReview(id) {
    await this.props.deleteReview(id);
  }
  render() {
    let { name, reviewScore } = this.props.project;
    let { reviews, currentUserProfile } = this.props;
    return (
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          backgroundColor: '#ecf0f1'
        }}
      >
        {/*Header*/}
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 30,
            paddingBottom: 30
          }}
        >
          <View
            style={{
              width: width * 0.88,
              marginLeft: width * 0.06,
              backgroundColor: 'white'
            }}
          >
            <Text style={styles.reviewPageTitle}>{name}</Text>
            <Text style={styles.reviewPageSubTitle}>
              {i18n.t('label.community_reviews')}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 7,
                alignItems: 'center'
              }}
            >
              <Icon
                name="star"
                solid
                size={12}
                style={{ color: '#4d5153', marginRight: 3 }}
              />
              <Text style={styles.totalRating}>
                <NumberFormat data={(reviewScore / 100).toFixed(2)} />
              </Text>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity
          onPress={() => {
            updateStaticRoute('app_add_review', this.props.navigation);
          }}
          style={styles.writeReviewButton}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            Write a Review
            </Text>
        </TouchableOpacity> */}

        {/*All Reviews*/}
        <View style={{ paddingTop: 20, backgroundColor: '#ecf0f1' }}>
          {reviews
            .sort((a, b) => {
              return new Date(b.updated) - new Date(a.updated);
            })
            .map(review => {
              return (
                <SingleReview
                  currentUserProfile={this.props.currentUserProfile}
                  deleteReview={this.deleteReview}
                  navigation={this.props.navigation}
                  key={review.id}
                  review={review}
                />
              );
            })}
        </View>

        {/* All Reviews Ended */}

        {/*Write Review*/}
        {this.isReviewer() && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ecf0f1'
            }}
          >
            <TouchableOpacity
              onPress={() => {
                pushStaticRoute('app_add_review', this.props.navigation);
              }}
              style={styles.writeReviewButton}
            >
              <Text style={{ fontWeight: 'bold', color: 'white' }}>
                {i18n.t('label.write_review')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  reviewPageTitle: {
    fontSize: 27,
    lineHeight: 40,
    color: '#4d5153',
    fontFamily: 'OpenSans',
    fontWeight: '800',
    fontStyle: 'normal'
  },
  reviewPageSubTitle: {
    fontFamily: 'OpenSans',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#4d5153',
    marginTop: 7
  },
  totalRating: {
    opacity: 0.8,
    fontFamily: 'OpenSans',
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: '#4d5153',
    marginRight: 5
  },
  writeReviewButton: {
    paddingHorizontal: 36,
    backgroundColor: '#89b53a',
    height: 52,
    borderRadius: 24,
    marginTop: 10,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
    reviews: selectedReviewsSelector(state),
    project: selectedPlantProjectSelector(state),
    currentUserProfile: currentUserProfileSelector(state)
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteReview
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
