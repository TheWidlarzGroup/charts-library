export const createAverageValuesArray = (data: number[]): number[] => {
  const averageValue = data.reduce((a, b) => a + b) / data.length
  return Array(data.length).fill(averageValue)
}

export const composeDataWithAverageValue = (
  valuesArray: number[],
  averageValuesArray: number[]
) => {
  return [
    {
      data: valuesArray,
      svg: { strokeWidth: 3 },
    },
    {
      data: averageValuesArray,
      svg: { strokeWidth: 1.5, strokeDasharray: [8, 16] },
    },
  ]
}

export const composeMultiDataWithAverageValue = (
  valuesArray: number[],
  averageValuesArray: number[],
  valuesArray2: number[],
  averageValuesArray2: number[],
  valuesArray3: number[],
  averageValuesArray3: number[]
) => {
  return [
    {
      data: valuesArray,
      svg: { stroke: 'blue', strokeWidth: 1 },
    },
    {
      data: averageValuesArray,
      svg: { stroke: 'blue', strokeWidth: 1.5, strokeDasharray: [8, 16] },
    },
    {
      data: valuesArray2,
      svg: { stroke: 'red', strokeWidth: 1 },
    },
    {
      data: averageValuesArray2,
      svg: { stroke: 'red', strokeWidth: 1.5, strokeDasharray: [8, 16] },
    },
    {
      data: valuesArray3,
      svg: { stroke: 'green', strokeWidth: 1 },
    },
    {
      data: averageValuesArray3,
      svg: { stroke: 'green', strokeWidth: 1.5, strokeDasharray: [8, 16] },
    },
  ]
}
