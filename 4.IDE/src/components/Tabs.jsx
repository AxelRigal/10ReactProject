import { useSelector } from "react-redux";
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import js from "../assets/js.svg"
import CodeTab from "./CodeTab";
import ButtonTab from "./ButtonTab";
import { useState } from "react";

export default function Tabs() {
  const tabs = useSelector(state => state.tabs)
  console.log("tabs", tabs);
  
  const [tabIndex, setTabIndex] = useState(tabs[0].id)
  console.log("tabIndex", tabIndex);
  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabs.map(tab => (
          <ButtonTab key={tab.id} id={tab.id} imgURL={tab.imgURL} toggleTab={id => setTabIndex(id)} buttonContent={tab.buttonContent}/>
        ))}
      </div>
      <div className="w-full grow relative">
        <CodeTab id={tabIndex}
        code={tabs.find(obj=> obj.id === tabIndex).code}/>
      </div>
    </div>
  );
}
