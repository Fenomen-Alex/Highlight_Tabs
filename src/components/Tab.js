import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const Tab = ({title}) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });
  const route = title === 'Home' ? '' : `/${title.toLowerCase()}`;

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
      <NavLink
        exact
        to={route}
        activeClassName="is-active"
      >
        {title}
      </NavLink>
    </div>
  )
}

export default Tab;
