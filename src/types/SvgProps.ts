import {SvgProps} from 'react-native-svg';

export type SVGProps = SvgProps & {
  fill?: string;
  width?: number;
  height?: number;
  isActive?: boolean;
};
