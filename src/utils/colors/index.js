const mainColors = {
  yellow: '#FFC700',
  gray: '#8D92A3',
  dark: '#020202',
  green: '#1ABC9C',
  red: '#D9435E',
  white: '#FFFFFF',
};

export const colors = {
  primary: mainColors.yellow,
  secondary: mainColors.gray,
  white: mainColors.white,
  text: {
    primary: mainColors.dark,
    secondary: mainColors.gray,
    status: mainColors.green,
    danger: mainColors.red,
  },
  button: {
    primary: {
      background: mainColors.yellow,
      text: mainColors.dark,
    },
    secondary: {
      background: mainColors.gray,
      text: 'white',
    },
    danger: {
      background: mainColors.red,
      text: 'white',
    },
  },
};
