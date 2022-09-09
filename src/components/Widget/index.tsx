import { useState } from 'react'
import LottieAnimation from './LottieAnimation'
import WidgetHelper from './WidgetHelper'

const Widget = () => {
  const [switchToWidget, setSwitchToWidget] = useState(false)

  return <div>{switchToWidget ? <WidgetHelper /> : <LottieAnimation setSwitchToWidget={setSwitchToWidget} />}</div>
}

export default Widget
