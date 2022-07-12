import { createGlobalStyle } from "styled-components";

import ButlerUltraLightWoff from "./Butler/Butler-UltraLight.woff";
import ButlerUltraLightWoff2 from "./Butler/Butler-UltraLight.woff2";
import ButlerLightWoff from "./Butler/Butler-Light.woff";
import ButlerLightWoff2 from "./Butler/Butler-Light.woff2";
import ButlerWoff from "./Butler/Butler.woff";
import ButlerWoff2 from "./Butler/Butler.woff2";
import ButlerMediumWoff from "./Butler/Butler-Medium.woff";
import ButlerMediumWoff2 from "./Butler/Butler-Medium.woff2";
import ButlerBoldWoff from "./Butler/Butler-Bold.woff";
import ButlerBoldWoff2 from "./Butler/Butler-Bold.woff2";
import ButlerExtraBoldWoff from "./Butler/Butler-ExtraBold.woff";
import ButlerExtraBoldWoff2 from "./Butler/Butler-ExtraBold.woff2";
import ButlerBlackWoff from "./Butler/Butler-Black.woff";
import ButlerBlackWoff2 from "./Butler/Butler-Black.woff2";

import RobotoBlack from "./Roboto/Roboto-Black.ttf";
import RobotoBlackItalic from "./Roboto/Roboto-BlackItalic.ttf";
import RobotoBold from "./Roboto/Roboto-Bold.ttf";
import RobotoBoldItalic from "./Roboto/Roboto-BoldItalic.ttf";
import RobotoItalic from "./Roboto/Roboto-Italic.ttf";
import RobotoLight from "./Roboto/Roboto-Light.ttf";
import RobotoLightItalic from "./Roboto/Roboto-LightItalic.ttf";
import RobotoMedium from "./Roboto/Roboto-Medium.ttf";
import RobotoMediumItalic from "./Roboto/Roboto-MediumItalic.ttf";
import RobotoRegular from "./Roboto/Roboto-Regular.ttf";
import RobotoThin from "./Roboto/Roboto-Thin.ttf";
import RobotoThinItalic from "./Roboto/Roboto-ThinItalic.ttf";

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerUltraLightWoff2}) format('woff2'),
    url(${ButlerUltraLightWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerLightWoff2}) format('woff2'),
    url(${ButlerLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerWoff2}) format('woff2'),
    url(${ButlerWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerMediumWoff2}) format('woff2'),
    url(${ButlerMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerBoldWoff2}) format('woff2'),
    url(${ButlerBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerExtraBoldWoff2}) format('woff2'),
    url(${ButlerExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Butler';
    src: url(${ButlerBlackWoff2}) format('woff2'),
    url(${ButlerBlackWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
`;

export default FontStyles;
