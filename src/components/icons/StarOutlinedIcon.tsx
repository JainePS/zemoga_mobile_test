import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGProps} from '../../types/SvgProps';

const StarOutlinedIcon = ({width = 40, height = 40}: SVGProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M14.65 8.933l-2.165-4.624a.535.535 0 00-.97 0L9.35 8.933l-4.894.75a.538.538 0 00-.303.906l3.56 3.657-.835 5.129a.536.536 0 00.788.557L12 17.53l4.334 2.402a.536.536 0 00.788-.557l-.834-5.129 3.56-3.657a.538.538 0 00-.304-.907l-4.894-.75z"
        stroke="#EE4E34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(StarOutlinedIcon);
