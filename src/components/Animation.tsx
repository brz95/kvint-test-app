import Lottie from 'lottie-react'
import animationData from '../lottie/lottie.json'

type AnimationProps = {
  setSwitchToWidget: (switchToWidgetnd: boolean) => void
}

const Animation = ({ setSwitchToWidget }: AnimationProps) => {
  return (
    <div className="lottie">
      <Lottie animationData={animationData} loop={false} onComplete={() => setSwitchToWidget(true)} />
    </div>
  )
}

export default Animation
