import React, { useState } from "react";
import "./App.css";
const files = {
  title: "node_modules",
  children: [
    {
      title: "lodash",
      children: [{ title: "Map" }, { title: "isEmpty" }],
    },

    {
      title: "MUI",
      children: [
        { title: "Button" },
        {
          title: "Table",
          children: [
            {
              title: "Cell",
              children: [{ title: "Cell1" }, { title: "Cell2" }],
            },
            { title: "Row" },
          ],
        },
      ],
    },
  ],
};

function ChildrenComponent({ Child }) {
  const [display, setDisplay] = useState(false);

  const nestedChildren = (Child.children || []).map((Child) => {
    return <ChildrenComponent Child={Child} type="child" />;
  });

  return (
    <div className="child-div">
      {Child.children ? (
        <button
          className="btn"
          onClick={() => setDisplay(!display)}
          key={crypto.randomUUID}
        >
          {Child.title}
        </button>
      ) : (
        <p> {Child.title}</p>
      )}
      <div style={{ display: display ? "block" : "none" }}>
        {nestedChildren}
      </div>
    </div>
  );
}

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <button className=" parent-btn btn " onClick={() => setDisplay(!display)}>
        {files.title}
      </button>
      <div style={{ display: display ? "block" : "none" }}>
        {files?.children?.map((Child, idx) => {
          return <ChildrenComponent key={idx} Child={Child} />;
        })}
      </div>
    </>
  );
}

export default App;
