import styles from "./bank-card.module.scss";

export function getClassNamesForCard(props: any, isBackView: any) {
  let classNames = [styles.card, props.className];
  updateGradientRelated(classNames, props, isBackView);
  updateVerticalOrHorizontal(classNames, props, isBackView);
  updateBasedOnFrontOrBack(classNames, props, isBackView);
  return classNames.join(" ");
}

function updateBasedOnFrontOrBack(
  classNames: any,
  props: any,
  isBackView: any
) {
  if (props.isBackPreview) {
    if (isBackView) {
      classNames.push(styles.card_back);
    } else {
      classNames.push(styles.card_front);
    }
  } else {
    classNames.push(styles.card_front);
  }
}

function updateVerticalOrHorizontal(
  classNames: any,
  props: any,
  isBackView: any
) {
  if (props.isVertical) {
    classNames.push(styles.card_vertical);
  } else {
    classNames.push(styles.card_horizontal);
  }
}

function updateGradientRelated(classNames: any, props: any, isBackView: any) {
  const data = props.data;

  if (data?.info?.type == "mastercard") {
    classNames.push(styles.card_mastercard_gradient_color);
  } else {
    classNames.push(styles.card_visa_gradient_color);
  }
}
