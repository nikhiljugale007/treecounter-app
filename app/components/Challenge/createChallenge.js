import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';

import Tabs from '../Common/Tabs';
import TextHeading from '../Common/Heading/TextHeading';
import CardLayout from '../Common/Card';
import SearchAutosuggest from '../Header/SearchAutosuggest';
import PrimaryButton from '../Common/Button/PrimaryButton';

import {
  challengeFormSchema,
  challengeFormSchemaOptions
} from '../../server/parsedSchemas/challenge';
import i18n from '../../locales/i18n';
import DescriptionHeading from '../Common/Heading/DescriptionHeading';
import TextBlock from '../Common/Text/TextBlock';
import ChallengeList from './challengeList';

let TCombForm = t.form.Form;

export default class Challenge extends Component {
  static data = {
    tabsUser: [
      {
        name: i18n.t('label.treecounter_user_name'),
        id: 'direct'
      },
      {
        name: i18n.t('label.other_email'),
        id: 'invitation'
      }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      form: {
        challengeMethod: 'direct',
        goal: 100,
        endDate: 2020
      },
      tempForm: {},
      checked: 'indefinite'
    };
    this.handleModeUserChange = this.handleModeUserChange.bind(this);
  }

  handleModeUserChange(tab) {
    this.setState({
      modeUser: tab,
      form: {
        ...this.state.form,
        challengeMethod: tab
      }
    });
  }

  onFormChange = value => {
    this.setState({ tempForm: value });
  };

  suggestionClicked = (context, event) => {
    this.setState({
      challenged: event.suggestion.id,
      challengedName: event.suggestion.name
    });
  };

  handleTreesChange = value => {
    this.setState({
      form: {
        ...this.state.form,
        goal: value
      }
    });
  };

  handleEndDateChange = value => {
    this.setState({
      form: {
        ...this.state.form,
        endDate: value
      }
    });
  };

  radioChange = event => {
    this.setState({
      checked: event.target.value
    });
  };

  challenge = () => {
    let requestData;
    if (this.state.modeUser === 'invitation') {
      let value = this.refs.challengeUser.getValue();
      requestData = {
        ...this.state.form,
        invitee: { ...value }
      };
    } else {
      requestData = {
        ...this.state.form,
        challenged: this.state.challenged
      };
    }
    if (this.state.checked === 'indefinite') {
      delete requestData.endDate;
    }

    this.props.challengeUser(requestData);
  };

  render() {
    return (
      <div className="sidenav-wrapper app-container__content--center">
        <TextHeading>
          {'Challenge'}
          <DescriptionHeading>
            {
              'The recipient will be able to choose whether or not to accept your challenge.'
            }
          </DescriptionHeading>
        </TextHeading>
        <CardLayout className="tpo-footer-card-layout">
          <div className="challenge__container">
            <Tabs
              data={Challenge.data.tabsUser}
              onTabChange={this.handleModeUserChange}
            >
              {this.state.modeUser === Challenge.data.tabsUser[0].id ? (
                <SearchAutosuggest
                  onSuggestionClicked={this.suggestionClicked}
                  clearSuggestions={false}
                />
              ) : (
                <TCombForm
                  ref="challengeUser"
                  type={challengeFormSchema}
                  options={challengeFormSchemaOptions}
                  value={this.state.tempForm}
                  onChange={this.onFormChange}
                />
              )}
            </Tabs>
            <div className="number_trees">
              <TextBlock>Challenge to plant</TextBlock>
              <span className="input_trees">
                <input
                  type="number"
                  value={this.state.form.goal}
                  onChange={evt => this.handleTreesChange(evt.target.value)}
                />
                <TextBlock>trees</TextBlock>
              </span>
            </div>
            <div className="trees_by_time">
              <input
                type="radio"
                onChange={event => this.radioChange(event)}
                value="indefinite"
                checked={this.state.checked === 'indefinite'}
              />
              <TextBlock>Indefinite</TextBlock>
              <input
                type="radio"
                value="custom"
                onChange={event => this.radioChange(event)}
                checked={this.state.checked === 'custom'}
                className="radio_margin_left"
              />
              <TextBlock>by </TextBlock>
              <input
                type="number"
                value={this.state.form.endDate}
                onChange={evt => this.handleEndDateChange(evt.target.value)}
              />
            </div>
          </div>
          <PrimaryButton onClick={this.challenge}>Challenge</PrimaryButton>
        </CardLayout>
        <ChallengeList
          challenges={this.props.challenges}
          navigation={this.props.navigation}
          challengeStatus={this.props.challengeStatus}
        />
      </div>
    );
  }
}

Challenge.propTypes = {
  challengeUser: PropTypes.func,
  challenges: PropTypes.array.isRequired,
  challengeStatus: PropTypes.func,
  navigation: PropTypes.any,
  currentUserProfile: PropTypes.any
};