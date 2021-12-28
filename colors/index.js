module.exports = {
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  foreground: require('./foreground'),
  background: require('./background'),
  outline: require('./outline'),
  ...require('./accent'),
  ...require('./secondary')
}