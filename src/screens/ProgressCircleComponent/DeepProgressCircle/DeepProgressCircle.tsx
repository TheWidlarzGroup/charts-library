import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import Svg from 'react-native-svg'

export const DeepProgressCircle = () => {
  return (
    <>
      <ProgressCircle
        style={{ height: 200 }}
        progress={0.8}
        progressColor={'rgb(134, 65, 244)'}
        startAngle={-Math.PI}
        endAngle={Math.PI}>
        <Svg style={{ height: 180, justifyContent: 'center' }}>
          <ProgressCircle
            style={{ height: 180 }}
            progress={0.7}
            progressColor={'rgb(134, 65, 244)'}
            startAngle={-Math.PI}
            endAngle={Math.PI}>
            <Svg style={{ height: 160, justifyContent: 'center' }}>
              <ProgressCircle
                style={{ height: 160 }}
                progress={0.6}
                progressColor={'rgb(134, 65, 244)'}
                startAngle={-Math.PI}
                endAngle={Math.PI}>
                <Svg style={{ height: 140, justifyContent: 'center' }}>
                  <ProgressCircle
                    style={{ height: 140 }}
                    progress={0.5}
                    progressColor={'rgb(134, 65, 244)'}
                    startAngle={-Math.PI}
                    endAngle={Math.PI}>
                    <Svg style={{ height: 120, justifyContent: 'center' }}>
                      <ProgressCircle
                        style={{ height: 120 }}
                        progress={0.4}
                        progressColor={'rgb(134, 65, 244)'}
                        startAngle={-Math.PI}
                        endAngle={Math.PI}>
                        <Svg style={{ height: 100, justifyContent: 'center' }}>
                          <ProgressCircle
                            style={{ height: 100 }}
                            progress={0.3}
                            progressColor={'rgb(134, 65, 244)'}
                            startAngle={-Math.PI}
                            endAngle={Math.PI}
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
