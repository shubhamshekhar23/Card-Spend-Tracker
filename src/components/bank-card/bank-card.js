import { useState } from "react";
import { getClassNamesForCard } from "./class-provider.service";
import { CardBackView } from "./card-back-view/card-back-view";
import { CardFrontView } from "./card-front-view/card-front-view";

export default function BankCard(props) {
  const [isBackView, setIsBackView] = useState(false); // can hahve 0,1,2
  const data = props.data;

  function handleMouseUp() {
    if (!props.isBackPreview) return;
    setIsBackView(false);
    document.removeEventListener("pointerup", handleMouseUp);
  }

  function handleMouseDown() {
    if (!props.isBackPreview) return;
    setIsBackView(true);
    document.addEventListener("pointerup", handleMouseUp);
  }

  function correctViewOfCard() {
    if (props.isBackPreview && isBackView) {
      return (
        <CardBackView data={data} onPointerUp={handleMouseUp}></CardBackView>
      );
    }
    return (
      <CardFrontView
        data={data}
        onPointerDown={handleMouseDown}
      ></CardFrontView>
    );
  }

  return (
    <div
      className={getClassNamesForCard(props, isBackView)}
      onClick={props.onClick}
      id={`card-${data?.id}`}
    >
      {correctViewOfCard()}
    </div>
  );
}
