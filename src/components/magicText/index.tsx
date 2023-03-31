import React, { FC } from "react";
import { View } from "@tarojs/components";
import Styles from "./index.module.scss";
import './index.css'

type Props = {
  style?: any;
  title?: string;
  onClick?: () => void;
};
const magicText: FC<Props> = ({ style, title, onClick }) => {
  return (
    <View
      className={Styles.textMagic}
      onClick={onClick}
      style={style}
    >
      {title}
      <View className={Styles.white}></View>
    </View>
  );
};

export default magicText;
