import light from './light';

const dark: typeof light = {
  ...light,
  title: 'dark',
  colors: {
    ...light.colors,
    background: '#272727',
    text: '#fbfbfb',
  },
};

export default dark;
