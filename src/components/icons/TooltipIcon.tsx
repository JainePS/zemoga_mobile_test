import React, {memo} from 'react';
import {Path, SvgXml} from 'react-native-svg';
import {SVGProps} from '../../types/SvgProps';

const Tooltip = ({fill = 'black', width = 20, height = 20}: SVGProps) => {
  return (
    <SvgXml
      width={width}
      height={height}
      viewBox={'0 0 122 145'}
      fill={fill}
      xml="http://www.w3.org/2000/svg">
      <Path
        d="M8 12C8 13.105 7.105 14 6 14C4.895 14 4 13.105 4 12C4 10.895 4.895 10 6 10C7.105 10 8 10.895 8 12Z"
        fill="#1C2E45"
        fill-opacity="0.6"
      />
      <Path
        d="M14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12Z"
        fill="#1C2E45"
        fill-opacity="0.6"
      />
      <Path
        d="M20 12C20 13.105 19.105 14 18 14C16.895 14 16 13.105 16 12C16 10.895 16.895 10 18 10C19.105 10 20 10.895 20 12Z"
        fill="#1C2E45"
        fill-opacity="0.6"
      />
    </SvgXml>
  );
};

const tooltip = memo(Tooltip);
export default tooltip;
