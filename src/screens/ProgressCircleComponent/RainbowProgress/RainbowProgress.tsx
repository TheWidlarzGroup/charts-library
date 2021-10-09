import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import Svg from 'react-native-svg'

export const RainbowProgress = () => {
  return (
    <>
      <ProgressCircle
        style={{ height: 200 }}
        progress={0.8}
        backgroundColor={'white'}
        progressColor={'rgb(134, 65, 244)'}
        startAngle={-Math.PI}
        endAngle={Math.PI}>
        <Svg style={{ justifyContent: 'center' }}>
          <ProgressCircle
            style={{ height: 180 }}
            progress={0.7}
            backgroundColor={'white'}
            progressColor={'blue'}
            startAngle={-Math.PI * 0.9}
            endAngle={Math.PI * 1.1}>
            <Svg style={{ justifyContent: 'center' }}>
              <ProgressCircle
                style={{ height: 160 }}
                progress={0.6}
                backgroundColor={'white'}
                progressColor={'green'}
                startAngle={-Math.PI * 0.8}
                endAngle={Math.PI * 1.2}>
                <Svg style={{ justifyContent: 'center' }}>
                  <ProgressCircle
                    style={{ height: 140 }}
                    progress={0.5}
                    backgroundColor={'white'}
                    progressColor={'red'}
                    startAngle={-Math.PI * 0.7}
                    endAngle={Math.PI * 1.3}>
                    <Svg style={{ justifyContent: 'center' }}>
                      <ProgressCircle
                        style={{ height: 120 }}
                        progress={0.4}
                        backgroundColor={'white'}
                        progressColor={'orange'}
                        startAngle={-Math.PI * 0.6}
                        endAngle={Math.PI * 1.4}>
                        <Svg style={{ justifyContent: 'center' }}>
                          <ProgressCircle
                            style={{ height: 100 }}
                            progress={0.3}
                            backgroundColor={'white'}
                            progressColor={'yellow'}
                            startAngle={-Math.PI * 0.5}
                            endAngle={Math.PI * 1.5}
                          />
                        </Svg>
                      </ProgressCircle>
                    </Svg>
                  </ProgressCircle>
                </Svg>
              </ProgressCircle>
            </Svg>
          </ProgressCircle>
        </Svg>
      </ProgressCircle>
    </>
  )
}
