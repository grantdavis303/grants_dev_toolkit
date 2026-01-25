import { useState } from "react";
import "./Accordion.css";

interface Props {
  title: string;
  children: any;
}

function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [outerContainerOpen, setOuterContainerOpen] = useState("closed");
  const [arrowOpen, setArrowOpen] = useState("closed");
  const [innerBoxOpen, setInnerBoxOpen] = useState("closed");

  function handleClick() {
    if (isOpen === false) {
      setIsOpen(true);
      setOuterContainerOpen("open");
      setArrowOpen("open");
      setInnerBoxOpen("open");
    } else {
      setIsOpen(false);
      setOuterContainerOpen("closed");
      setArrowOpen("closed");
      setInnerBoxOpen("closed");
    }
  }

  return (
    <div className={"AccordionOuterBox " + outerContainerOpen}>
      <div className="AccordionHeader" onClick={handleClick}>
        <h3 className="AccordionHeaderTitle">{title}</h3>
        <img src="images/DownArrow.png" className={"DownArrow " + arrowOpen} />
      </div>

      <div className={"AccordionInnerBox " + innerBoxOpen}>
        <div className="AccordionInnerContent">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
