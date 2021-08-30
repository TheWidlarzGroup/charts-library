declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}

//in case of svg
// declare module '*.svg' {
//   import Svg from 'react-native-svg'
//
//   const content: Svg
//   export default content
// }
