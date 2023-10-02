import {
  UilBars,
  UilBolt,
  UilCar,
  UilEstate,
  UilHistory,
  UilMusicNote,
  UilPhone,
  UilShare,
  UilSpaceKey,
  UilWifi,
} from "@iconscout/react-unicons";

import FooterNav from "@/components/footer-nav/footer-nav";
import SlideNav from "@/components/ui/slide-nav/slide-nav";
import RoundPill from "@/ui/round-pill/round-pill";
import SquareButton from "@/ui/square-button/square-button";
import TextButton from "@/ui/text-button/text-button";

import styles from "./ui-story.module.scss";

export default function UiStory() {
  return (
    <main className={styles.main}>
      {/* slide nav */}

      {/* Buttons */}
      <div>
        <h1>Buttons</h1>
        <TextButton>Pay</TextButton>
        <SquareButton>
          <UilShare color="white" />
        </SquareButton>
        <SquareButton>
          <UilHistory color="white" />
        </SquareButton>
      </div>

      {/* Round pills */}
      <div>
        <h1>Round pills</h1>
        <RoundPill color="pink">
          <UilShare color="white" />
        </RoundPill>
        <RoundPill color="yellow">
          <UilMusicNote color="white" />
        </RoundPill>
        <RoundPill color="blue">
          <UilCar color="white" />
        </RoundPill>
        <RoundPill gradient="blue">
          <UilCar color="white" />
        </RoundPill>
        <RoundPill gradient="blue">
          <UilBolt color="white" />
        </RoundPill>
        <RoundPill gradient="blue">
          <UilPhone color="white" />
        </RoundPill>
        <RoundPill gradient="blue">
          <UilWifi color="white" />
        </RoundPill>
      </div>

      {/* ICONS AVAILABLE */}
      <div>
        <h1>ICONS USED</h1>
        <UilEstate />
        <UilShare />
        <UilHistory />
        <UilCar />
        <UilBars />
        <UilMusicNote />
        <UilPhone />
        <UilWifi />
        <UilBolt />
        <UilSpaceKey />
      </div>

      <SlideNav num={4} active={1} />
    </main>
  );
}
