import React, { useState, useEffect } from "react";
import CSSEditor from "./CSSEditor";
import { Example } from "../lib/types";
import Viewer from "./Viewer";
import {mergeDeclarations} from "../lib/examples";
interface ExploreProps {
  firstExample: Example;
  secondExample: Example;
  selectedStep: number;
}

export default function Explore({
  firstExample,
  secondExample,
  selectedStep
}: ExploreProps): JSX.Element {
  const [firstSetOfDeclarations, setFirstSetOfDeclarations] = useState(
    firstExample.declarations
  );
  const [firstSetOfMediaDeclarations, setFirstSetOfMediaDeclarations] = useState(
    firstExample.media
  );
  const [firstSetOfScopedDeclarations, setFirstSetOfScopedDeclarations] = useState(
    firstExample.scoped_declarations
  );
  const [secondSetOfDeclarations, setSecondSetOfDeclarations] = useState(
    secondExample.declarations
  );
  const [secondSetOfMediaDeclarations, setSecondSetOfMediaDeclarations] = useState(
    secondExample.media
  );
  const [secondSetOfScopedDeclarations, setSecondSetOfScopedDeclarations] = useState(
    secondExample.scoped_declarations
  );

  const [viewerSize, setViewerSize] = useState(70);
  const [firstHidden, setFirstHidden] = useState(false);
  const [secondHidden, setSecondHidden] = useState(false);
  const [firstCodeHidden, setFirstCodeHidden] = useState(false);
  const [secondCodeHidden, setSecondCodeHidden] = useState(false);
  const [windowSizerUsed, setWindowSizerUsed] = useState(false);
  useEffect(() => {
    setFirstSetOfDeclarations(firstExample.declarations);
    setFirstSetOfMediaDeclarations(firstExample.media)
    setFirstSetOfScopedDeclarations(firstExample.scoped_declarations)
    setSecondSetOfDeclarations(secondExample.declarations);
    setSecondSetOfMediaDeclarations(secondExample.media)
    setSecondSetOfScopedDeclarations(secondExample.scoped_declarations)
  }, [firstExample.declarations, firstExample.media, firstExample.scoped_declarations, 
    secondExample.declarations, secondExample.media, secondExample.scoped_declarations]);

  const htmlExamplesToShow = [];

  if (!firstHidden) {
    htmlExamplesToShow.push(firstExample);
  }
  if (!secondHidden) {
    htmlExamplesToShow.push(secondExample);
  }
  let screenWidth = window.innerWidth;
  return (
    <div>
      {/* THIS IS THE SLIDER BAR */}
      <div className="w-full px-4 py-2 bg-gray-100 mb-4">
        <h1>
          Window width: {(Math.round(screenWidth*viewerSize/100))}px
        </h1>
        {windowSizerUsed ?  <></>: <p>Resize Me!</p>}
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => {
            setViewerSize(Number(e.target.value))
            setWindowSizerUsed(true)}}
          value={viewerSize}
          className="w-full"
        />
        <div className="flex gap-2">
          <button className="btn" onClick={() => setFirstHidden(!firstHidden)}>
            {firstHidden ? "Show" : "Hide"} Example 1{" "}
          </button>
          <button className="btn" onClick={() => setSecondHidden(!secondHidden)}>
            {secondHidden ? "Show" : "Hide"} Example 2{" "}
          </button>
        </div>
      </div>
      {/* Viewers are below*/}
      <div className = "view-edit">
      {/* <div className="viewer-container flex flex-wrap w-full justify-between gap-y-4 mb-1" style={{ height: "65vh"}}> */}
          {!firstHidden && (
            <Viewer
              example={{ ...firstExample, declarations: firstSetOfDeclarations, media: firstSetOfMediaDeclarations, scoped_declarations: firstSetOfScopedDeclarations }}
              size={(secondHidden && (selectedStep==3 || selectedStep==4)) ? 2*viewerSize : viewerSize}
              view = "left"
              selectedStep = {selectedStep}
            />
          )}
          {!secondHidden && (
            <Viewer
              example={{
                ...secondExample, declarations: secondSetOfDeclarations, media: secondSetOfMediaDeclarations, scoped_declarations: secondSetOfScopedDeclarations 
              }}
              size={(firstHidden && (selectedStep==3 || selectedStep==4)) ? 2*viewerSize : viewerSize}
              view = "right"
              selectedStep = {selectedStep}
            />
          )}
        {/* </div> */}
        {/* {(selectedStep==3 || selectedStep==4) && !(firstHidden || secondHidden) && (
          <div style={{backgroundColor:"lightGray", display: "flex", flexFlow: "column wrap", padding: "0px 10px"}} >
            <h1 style={{fontSize: 16,  textAlign: "center", fontWeight: "bold"}}>Instructions</h1>
            <p><b>Toggle</b> the checkboxes to identify the visual effects of CSS code. Click on the ? mark next to the properties to read their definitions. <b>Edit</b> the property/values to identify the visual effects of CSS code. Play with the slider bar to see how it affects the layout.</p>
            <span style={{backgroundColor:"#A7F3D0"}}>Green highlights mean the two sites share the same property / value pair.</span>
            <span style={{backgroundColor:"#FDE68A"}}> Yellow highlights mean the two sites share the same property, but with different values. </span>
          </div>
        )} */}
        {/* {selectedStep!==1 && selectedStep!==2 && (
        <div className="css-editor-container grid w-full  mx-auto bg-gray-100 rounded divide-x-2 mb-16"
              style = {{gridTemplateColumns: ((firstHidden || secondHidden) && (selectedStep==3 || selectedStep==4)) ? 'repeat(1,minmax(0,1fr))' : 'repeat(2,minmax(0,1fr))',
                        overflow: ((firstHidden || secondHidden) && (selectedStep==3 || selectedStep==4)) ? 'scroll' : 'none'}}> */}
          {!firstHidden && (
            <CSSEditor
            declarations={firstSetOfDeclarations}
            defaultParent={firstExample.defaultParentClassname}
            diffAgainstDeclarations={mergeDeclarations(secondSetOfDeclarations, secondSetOfMediaDeclarations, secondSetOfScopedDeclarations)}
            media = {firstSetOfMediaDeclarations}
            scoped_declarations= {firstSetOfScopedDeclarations}
            htmlOutput={firstExample.htmlOutput}
            children={firstExample.children}
            onChange={(declarations, media, scoped_declarations) => (setFirstSetOfDeclarations(declarations), setFirstSetOfMediaDeclarations(media), 
              setFirstSetOfScopedDeclarations(scoped_declarations))}
            />  
          )}
          {!secondHidden && (
            <CSSEditor
              declarations={secondSetOfDeclarations}
              defaultParent={secondExample.defaultParentClassname}
              diffAgainstDeclarations={mergeDeclarations(firstSetOfDeclarations, firstSetOfMediaDeclarations, firstSetOfScopedDeclarations)}
              media = {secondSetOfMediaDeclarations}
              scoped_declarations={secondSetOfScopedDeclarations}
              htmlOutput={secondExample.htmlOutput}
              children={secondExample.children}
              onChange={(declarations, media, scoped_declarations) => (setSecondSetOfDeclarations(declarations), setSecondSetOfMediaDeclarations(media),
                setSecondSetOfScopedDeclarations(scoped_declarations))}
            />
          )}
        {/* </div> */}
        {/* )} */}
      </div>
    </div>
  );
}
