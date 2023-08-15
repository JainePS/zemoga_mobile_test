import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGProps} from '../../types/SvgProps';

const DeleteIcons = ({width = 25, height = 25}: SVGProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 32 32">
      <Path
        d="M4 6h16l-1.58 14.22A2 2 0 0116.432 22H7.568a2 2 0 01-1.988-1.78L4 6zM7.345 3.147A2 2 0 019.154 2h5.692a2 2 0 011.81 1.147L18 6H6l1.345-2.853zM2 6h20M10 11v5M14 11v5"
        stroke="#EE4E34"
        strokeWidth={1}
      />
    </Svg>
  );
};

export default React.memo(DeleteIcons);
