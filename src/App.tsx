import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import Animation from "./components/Animation";
import Widget from "./components/Widget";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [switchToWidget, setSwitchToWidget] = useState<boolean>(false);

  return (
    <div className="App">
      {loading ? (
        switchToWidget ? (
          <Widget />
        ) : (
          <Animation setSwitchToWidget={setSwitchToWidget} />
        )
      ) : (
        <Button type="primary" onClick={() => setLoading(true)}>
          <PoweroffOutlined />
          CLICK ME!
        </Button>
      )}
    </div>
  );
};

export default App;
