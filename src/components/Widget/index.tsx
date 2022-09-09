import { useState } from 'react'
import LottieAnimation from './LottieAnimation'
import WidgetHelper from './WidgetHelper'

const Widget = () => {
  const [switchToWidget, setSwitchToWidget] = useState(false)

  return <>{switchToWidget ? <WidgetHelper /> : <LottieAnimation setSwitchToWidget={setSwitchToWidget} />}</>
}

export default Widget
