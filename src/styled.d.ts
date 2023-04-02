import 'styled-components';

import { ITheme } from '@/styles/ITheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
