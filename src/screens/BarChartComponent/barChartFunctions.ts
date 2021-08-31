export const transformDataForBarChart = (
  number: number
): { value: number; svg: { fill: string; stroke?: string; strokeWidth?: number } } => {
  // random ranges > number < inscribed to distinguish colors
  if (number <= 30) {
    return {
      value: number,
      svg: {
        fill: 'red',
      },
    }
  } else if (number > 30 && number < 70) {
    return {
      value: number,
      svg: {
        stroke: 'orange',
        strokeWidth: 2,
        fill: '#FFD580',
      },
    }
  } else {
    return {
      value: number,
      svg: {
        fill: 'green',
      },
    }
  }
}

export const transformDataForBarChart2 = (
  number: number,
  index: number
): { value: number; svg: { fill: string; stroke?: string; strokeWidth?: number } } => {
  // random ranges > number < inscribed to distinguish colors
  if (index % 2 === 0) {
    return {
      value: number,
      svg: {
        fill: 'red',
      },
    }
  } else if (index % 3 === 0) {
    return {
      value: number,
      svg: {
        stroke: 'orange',
        strokeWidth: 2,
        fill: '#FFD580',
      },
    }
  } else if (index % 5 === 0) {
    return {
      value: number,
      svg: {
        fill: 'green',
      },
    }
  } else {
    return {
      value: number,
      svg: {
        fill: 'purple',
      },
    }
  }
}
