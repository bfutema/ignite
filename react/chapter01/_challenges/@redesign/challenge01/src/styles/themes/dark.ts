import light from './light';

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,
    background: '#272727',
    text: '#fbfbfb',
  },
};

export default dark;
