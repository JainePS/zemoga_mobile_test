import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import TooltipIcon from '../icons/TooltipIcon';

const Tooltip = () => {
  return (
    <View>
      <TouchableOpacity>
        <TooltipIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Tooltip;
