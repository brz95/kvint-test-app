import { PoweroffOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import Widget from './components/Widget'

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      {loading ? (
        <Widget />
      ) : (
        <Button type="primary" onClick={() => setLoading(true)}>
          <PoweroffOutlined />
          CLICK ME!
        </Button>
      )}
    </div>
  )
}

export default App
