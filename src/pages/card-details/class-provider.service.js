import styles from "./card-details.module.scss";

export function classForSliderPanel(sliderPosition) {
  let classNames = [styles.slider_panel];

  if (sliderPosition == 1) {
    classNames.push(styles.slider_panel_level_one);
  }
  if (sliderPosition == 2) {
    classNames.push(styles.slider_panel_level_two);
  }
  return classNames.join(" ");
}

export function classForTitle(sliderPosition) {
  if (sliderPosition == -1) return;
  if (sliderPosition !== 0) return styles.title_up;
  else return styles.title_down;
}

export function classForBalanceShareSection(sliderPosition) {
  if (sliderPosition == -1) return;
  if (sliderPosition !== 0) return styles.balance_share_up;
  else return styles.balance_share_down;
}
