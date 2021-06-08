import React, {useState} from 'react';
import './App.css';

const Tab = ({title}) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const moveHighlight = (e) => {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150});
  }

  const hideHighlight = (e) => {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150, opacity: 0 })
  }
  return (
    <div
      className="tab"
      onMouseMove={moveHighlight}
      onMouseOut={hideHighlight}
    >
      <div
        className="highlight"
        style={highlightStyle}
      />
      <a>{title}</a>
    </div>
  )
}

function App() {

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab title="Home" />
          <Tab title="About" />
          <Tab title="Features" />
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
