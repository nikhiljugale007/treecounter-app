import React from 'react';
import PropTypes from 'prop-types';
import parseDate from './NDVIfunctions/parseDate';
import { View, Text } from 'react-native';
import TouchableItem from '../Common/TouchableItem.native';

const textCommonStyle = { fontSize: 10, lineHeight: 14 };
const boldTextStyle = { fontWeight: 'bold' };

const Info = props => {
  const aggregate = props.selectedDataPoint.ndviAggregate;
  return (
    <View style={{ marginTop: 21 }}>
      {aggregate && (
        <React.Fragment>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View>
              <Text style={textCommonStyle}>
                {`${props.ndviResulFromSpell}  `}
                {parseDate(
                  props.selectedDataPoint.month,
                  props.selectedDataPoint.year
                )}
              </Text>
              <Text style={textCommonStyle}>
                {`${props.minimumSpell} `}
                <Text style={boldTextStyle}>{parseFloat(aggregate.min)}</Text>
                {` ${props.averageSpell} `}
                <Text style={boldTextStyle}>{parseFloat(aggregate.avg)}</Text>
                {` ${props.maximumSpell} `}
                <Text style={boldTextStyle}>{parseFloat(aggregate.max)}</Text>
              </Text>
            </View>
            <TouchableItem
              style={{
                height: 20,
                width: 20,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#990000',
                alignItems: 'center'
              }}
            >
              <Text>?</Text>
            </TouchableItem>
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

export default Info;

Info.propTypes = {
  year: PropTypes.number,
  monthUid: PropTypes.number,
  month: PropTypes.number,
  carbon: PropTypes.number,
  ndviAggregate: PropTypes.object,
  selectedDataPoint: PropTypes.object
};
