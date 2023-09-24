import { useState } from "react";
import { getClassNamesForCard } from "./class-provider.service";
import { CardBackView } from "./card-back-view/card-back-view";
import { CardFrontView } from "./card-front-view/card-front-view";
import PropTypes from "prop-types";

BankCard.propTypes = {
  data: PropTypes.object,
  isBackPreview: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.any,
  isVertical: PropTypes.bool,
};

export default function BankCard({
  data,
  isBackPreview,
  onClick,
  className,
  isVertical,
}) {
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
