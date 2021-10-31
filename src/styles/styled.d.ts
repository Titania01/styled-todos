import {} from "styled-components"
import { themeType } from "./Theme"
 declare module "styled-components" {
   export interface DefaultTheme extends themeType {}
 }