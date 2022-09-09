import Lottie from 'lottie-react'
import animationData from '../../lottie/lottie.json'

type AnimationProps = {
  setSwitchToWidget: (switchToWidgetnd: boolean) => void
}

const Animation = ({ setSwitchToWidget }: AnimationProps) => {
  const switchToWidget = (): void => {
    setSwitchToWidget(true)
  }

  return (
    <div className="lottie">
      <Lottie animationData={animationData} loop={false} onComplete={switchToWidget} />
    </div>
  )
}

export default Animation
