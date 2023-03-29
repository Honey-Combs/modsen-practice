import 'styled-components';

import { ITheme } from '@common/styles/ITheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
