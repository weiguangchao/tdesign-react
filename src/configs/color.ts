import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';

import { Color } from 'tvision-color';

/* eslint-disable indent */
export type TColorToken = Record<string, string>;
export type TColorSeries = Record<string, TColorToken>;

export const defaultLightColor = [
  '#0052d9',
  '#0594fa',
  '#00a870',
  '#ebb105',
  '#ed7b2f',
  '#e34d59',
  '#ed49b4',
  '#834ec2',
];
export const defaultDarkColor = [
  '#4582e6',
  '#29a4fb',
  '#03a56f',
  '#ca8d03',
  '#ed7b2f',
  '#ea7b84',
  '#f172c5',
  '#ab87d5',
];

export const COLOR_TOKEN: TColorSeries = {
  '#0052D9': {
    '@brand-color': '#0052D9',
    '@brand-color-1': '#e0ebff',
    '@brand-color-2': '#c0d8ff',
    '@brand-color-3': '#a1c4ff',
    '@brand-color-4': '#81b1ff',
    '@brand-color-5': '#5f9bff',
    '@brand-color-6': '#3d87ff',
    '@brand-color-7': '#176eff',
    '@brand-color-8': '#0052D9',
    '@brand-color-9': '#0048cd',
    '@brand-color-10': '#0035b5',
  },

  '#0594FA': {
    '@brand-color': '#0594FA',
    '@brand-color-1': '#d7eefe',
    '@brand-color-2': '#aeddfd',
    '@brand-color-3': '#84cafd',
    '@brand-color-4': '#58b8fc',
    '@brand-color-5': '#29a4fb',
    '@brand-color-6': '#0594FA',
    '@brand-color-7': '#29a4fb',
    '@brand-color-8': '#0594FA',
    '@brand-color-9': '#0378df',
    '@brand-color-10': '#01409b',
  },
  '#00A870': {
    '@brand-color': '#00A870',
    '@brand-color-1': '#8dffd9',
    '@brand-color-2': '#00f2a2',
    '@brand-color-3': '#00dc92',
    '@brand-color-4': '#00c583',
    '@brand-color-5': '#00A870',
    '@brand-color-6': '#009a5d',
    '@brand-color-7': '#00c583',
    '@brand-color-8': '#00A870',
    '@brand-color-9': '#009a5d',
    '@brand-color-10': '#004a14',
  },
  '#ED7B2F': {
    '@brand-color': '#ED7B2F',
    '@brand-color-1': '#fce5d7',
    '@brand-color-2': '#f8cdaf',
    '@brand-color-3': '#f4b285',
    '@brand-color-4': '#f19659',
    '@brand-color-5': '#ED7B2F',
    '@brand-color-6': '#e75510',
    '@brand-color-7': '#f19659',
    '@brand-color-8': '#ED7B2F',
    '@brand-color-9': '#e75510',
    '@brand-color-10': '#7f0a02',
  },
  '#E34D59': {
    '@brand-color': '#E34D59',
    '@brand-color-1': '#fbe5e7',
    '@brand-color-2': '#f7ccd0',
    '@brand-color-3': '#f3b2b8',
    '@brand-color-4': '#ef989f',
    '@brand-color-5': '#ea7b84',
    '@brand-color-6': '#E34D59',
    '@brand-color-7': '#ea7b84',
    '@brand-color-8': '#E34D59',
    '@brand-color-9': '#e42c3a',
    '@brand-color-10': '#8d0309',
  },
  '#ED49B4': {
    '@brand-color': '#ED49B4',
    '@brand-color-1': '#fce5f4',
    '@brand-color-2': '#facae9',
    '@brand-color-3': '#f7aede',
    '@brand-color-4': '#f491d2',
    '@brand-color-5': '#f172c5',
    '@brand-color-6': '#ED49B4',
    '@brand-color-7': '#f172c5',
    '@brand-color-8': '#ED49B4',
    '@brand-color-9': '#e80f9d',
    '@brand-color-10': '#8f025e',
  },
  '#834EC2': {
    '@brand-color': '#834EC2',
    '@brand-color-1': '#eee6f7',
    '@brand-color-2': '#ddceee',
    '@brand-color-3': '#ccb6e6',
    '@brand-color-4': '#bb9ede',
    '@brand-color-5': '#ab87d5',
    '@brand-color-6': '#9a6fce',
    '@brand-color-7': '#9a6fce',
    '@brand-color-8': '#834EC2',
    '@brand-color-9': '#783ac3',
    '@brand-color-10': '#4c1397',
  },
  '#EBB105': {
    '@brand-color': '#EBB105',
    '@brand-color-1': '#fde9ab',
    '@brand-color-2': '#fbd152',
    '@brand-color-3': '#EBB105',
    '@brand-color-4': '#dda204',
    '@brand-color-5': '#ca8d03',
    '@brand-color-6': '#b67803',
    '@brand-color-7': '#fbd152',
    '@brand-color-8': '#EBB105',
    '@brand-color-9': '#dda204',
    '@brand-color-10': '#603100',
  },
};

export const LIGHT_CHART_COLORS = {
  textColor: 'rgba(0, 0, 0, 0.9)',
  placeholderColor: 'rgba(0, 0, 0, 0.35)',
  borderColor: '#dcdcdc',
  containerColor: '#fff',
};

export const DARK_CHART_COLORS = {
  textColor: 'rgba(255, 255, 255, 0.9)',
  placeholderColor: 'rgba(255, 255, 255, 0.35)',
  borderColor: '#5e5e5e',
  containerColor: '#242424',
};

function toUnderline(name: string): string {
  return name.replace(/([A-Z])/g, '_$1').toUpperCase();
}

export function getBrandColor(type: string, colorList: TColorSeries): TColorToken {
  const name = /^#[A-F\d]{6}$/i.test(type) ? type : toUnderline(type);
  return colorList[name || 'DEFAULT'];
}

export function getColorList(colorArray: Array<TColorToken>): Array<string> {
  const pureColorList: Array<string> = [];
  colorArray.map((colorToken) => Object.keys(colorToken).map((key) => pureColorList.push(colorToken[key])));

  return pureColorList;
}

/**
 * 依据主题类型获取颜色
 *
 * @export
 * @param {string} theme
 * @returns {string[]}
 */
export function getColorFromTheme(theme: string): Array<string> {
  const state = useAppSelector(selectGlobal);

  const { colorList, theme: mode } = state;

  const isDarkMode = mode === 'dark';
  let themeColorList = [];
  const themeColor = getBrandColor(theme, colorList);
  if (!/^#[A-F\d]{6}$/i.test(theme) || defaultLightColor.includes(theme.toLocaleLowerCase())) {
    // eslint-disable-next-line no-param-reassign
    theme = themeColor?.['@brand-color'] || '#0052D9';
    const themIdx = defaultLightColor.indexOf(theme.toLocaleLowerCase());
    const defaultGradients = !isDarkMode ? defaultLightColor : defaultDarkColor;

    const spliceThemeList = defaultGradients.slice(0, themIdx);
    themeColorList = defaultGradients.slice(themIdx, defaultGradients.length).concat(spliceThemeList);
  } else {
    // eslint-disable-next-line no-param-reassign
    theme = themeColor?.['@brand-color'];
    themeColorList = Color.getRandomPalette({
      color: theme,
      colorGamut: 'bright',
      number: 8,
    });
  }

  return themeColorList;
}

export function getChartColor(color: string) {
  const finalColor = getColorFromTheme(color);
  const state = useAppSelector(selectGlobal);
  const { theme } = state;
  if (theme === 'dark') {
    return {
      ...DARK_CHART_COLORS,
      colorList: finalColor,
    };
  }
  return { ...LIGHT_CHART_COLORS, colorList: finalColor };
}
