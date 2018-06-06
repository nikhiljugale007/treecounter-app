import React from 'react';
import PropTypes from 'prop-types';
import PlantProjectSpecsItem from './PlantProjectSpecsItem';

import {
  locationIcon,
  plantedTarget,
  target,
  tree_survival,
  dollar
} from '../../assets';
/**
 * see: https://github.com/Plant-for-the-Planet-org/treecounter-platform/wiki/Component-PlantProjectSpecs
 */
const PlantProjectSpecs = ({
  location,
  countPlanted,
  countTarget,
  survivalRate,
  currency,
  treeCost,
  taxDeduction
}) => {
  return (
    <div className="project-specs__container">
      <div className="column">
        <PlantProjectSpecsItem
          icon={locationIcon}
          value={location}
          label="location"
        />
        <PlantProjectSpecsItem
          icon={plantedTarget}
          value={countPlanted}
          label="Planted"
        />
        <PlantProjectSpecsItem
          icon={target}
          value={countTarget}
          label="Target"
        />
        <PlantProjectSpecsItem
          icon={tree_survival}
          value={survivalRate}
          label="Survival Rate"
        />
      </div>
      <div className="column">
        <PlantProjectSpecsItem
          icon={dollar}
          value={`${currency} ${treeCost}`}
          label="Cost per Tree"
        />
        <PlantProjectSpecsItem
          value={
            <div className="project-specs__taxdeductible">
              Tax Deductible in {taxDeduction.join(', ')}
            </div>
          }
        />
      </div>
    </div>
  );
};

PlantProjectSpecs.propTypes = {
  location: PropTypes.string,
  countPlanted: PropTypes.number.isRequired,
  countTarget: PropTypes.number,
  treeCost: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  taxDeduction: PropTypes.array.isRequired,
  survivalRate: PropTypes.number.isRequired
};

export default PlantProjectSpecs;
