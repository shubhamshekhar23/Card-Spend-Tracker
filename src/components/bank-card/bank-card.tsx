import { useState } from "react";

import CardBackView from "./card-back-view/card-back-view";
import CardFrontView from "./card-front-view/card-front-view";
import { getClassNamesForCard } from "./class-provider.service";

type BankCardPropTypes = {
  data: any;
  isBackPreview?: Boolean;
  className: any;
  onClick?: () => void;
  isVertical?: Boolean;
};

export default function BankCard({
  data,
  isBackPreview = false,
  onClick,
  className,
  isVertical,
}: BankCardPropTypes) {
  const [isBackView, setIsBackView] = useState(false); // can hahve 0,1,2
  const props = {
    data,
    isBackPreview,
    onClick,
    className,
    isVertical,
  };

  function handleMouseUp() {
    if (!isBackPreview) return;
    setIsBackView(false);
    document.removeEventListener("pointerup", handleMouseUp);
  }

  function handleMouseDown() {
    if (!isBackPreview) return;
    setIsBackView(true);
    document.addEventListener("pointerup", handleMouseUp);
  }

  function correctViewOfCard() {
    if (isBackPreview && isBackView) {
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
      onClick={onClick}
      id={`card-${data?.id}`}
    >
      {correctViewOfCard()}
    </div>
  );
}
