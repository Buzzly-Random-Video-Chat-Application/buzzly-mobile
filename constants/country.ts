import type { SvgProps } from 'react-native-svg';

import { icons } from './icon';

export interface ICountry {
  name: string;
  code: string;
  flag: React.FC<SvgProps>;
}

export const countries: ICountry[] = [
  { name: 'United States', code: 'US', flag: icons.unitedStates },
  { name: 'Vietnam', code: 'VN', flag: icons.vietnam },
  { name: 'Thailand', code: 'TH', flag: icons.thailand },
  { name: 'Japan', code: 'JP', flag: icons.japan },
  { name: 'South Korea', code: 'KR', flag: icons.southKorea },
  { name: 'China', code: 'CN', flag: icons.china },
  { name: 'India', code: 'IN', flag: icons.india },
  { name: 'United Kingdom', code: 'UK', flag: icons.unitedKingdom },
  { name: 'Germany', code: 'DE', flag: icons.germany },
];
