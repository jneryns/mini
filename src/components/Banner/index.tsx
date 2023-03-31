import React, { FC, memo } from "react";
import classNames from "classnames";
import { View, Text, Image } from "@tarojs/components";
import Styles from "./index.module.scss";
import './index.css'

type Props = {
  style?: any;
  className?: any;
  title?: string;
  img?: string;
  onClick?: () => void;
};

const Banner: FC<Props> = ({ style, className, title, img = "", onClick }) => {
  return (
    <View
      className={classNames(Styles.banner, className)}
      onClick={onClick}
      style={style}
    >
      <Image src={img} mode="scaleToFill" className={Styles.img} />
      <View className={Styles.title}>{title}</View>
    </View>
  );
};

export default Banner;
