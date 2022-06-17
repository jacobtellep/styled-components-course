export const color = {
  primary: '#645cff',
  red: 'red',
};

export const setupBorder = ({ width, type = 'solid', color }) => {
  return `${width}px ${type} ${color}`;
};
