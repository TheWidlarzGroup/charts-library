export const getPieChartData = (data: number[]) => {
  return data.map((item, index) => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

    return {
      key: index,
      value: item,
      svg: { fill: randomColor },
    }
  })
}

export const getPieChartDataRounded = (data: number[]) => {
  return data.map((item, index) => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

    return {
      key: index,
      value: item,
      svg: { fill: randomColor },
      arc: { cornerRadius: 5 },
    }
  })
}

export const getPieChartDataSteps = () => {
  const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter']
  const values = [15, 25, 35, 45, 55]
  const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
  return values.map((key, index) => {
    return {
      key,
      value: values[index],
      svg: { fill: colors[index], stroke: colors[index - 1], strokeWidth: 2 },
      arc: { outerRadius: 70 + values[index] + '%', padAngle: 0.1 },
    }
  })
}
