export const colors = {
  text: '#BEBEBE',
  background: '#263238',
  complementary: '#7CB0FF'
};

export const breakpoints = {
  mobile: 720,
  fileTreeVisibility: 1150
};

export const media = {
  mobile:`@media(max-width: ${breakpoints.mobile}px)`,
  desktop:`@media(min-width: ${breakpoints.mobile + 1}px)`
};
