import React, { useCallback, useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import { cloudFunction } from "../../services/cloudFunction";
import {
  EARTH,
  MONSTER,
  ROCKET,
  STAR,
  MONSTER_BOX,
  STAR_S,
  ASTRONAUT
} from "@/constants/images";
import Styles from "./index.module.scss";
import classNames from "classnames";

/**
 * 跳转
 */
const onJump = item => {
  const { url } = item;
  Taro.navigateTo({ url });
};

const Index = () => {
  const [list, setList] = useState<any>([]);
  const [show, setShow] = useState<boolean>(false);
  const starList = Array.from(new Array(9).keys());

  useEffect(() => {
    // cloudFunction({ name: "getConfig", data: { code: "ENTRANCE" } }).then(
    //   res => {
    //     setList(res || []);
    //   }
    // );
  }, []);

  return (
    <View className={Styles.index}>
      {/* 怪兽 */}
      <Image
        mode="aspectFit"
        src={MONSTER}
        className={Styles.monster}
        onClick={() => {
          setShow(true);
          // setTimeout(() => {
          //   Taro.navigateTo({ url: "/pages/food/index" }).finally(() => {
          //     setShow(false);
          //   });
          // }, 800);
        }}
      />
      {/* 地球 */}
      <Image
        mode="aspectFit"
        src={EARTH}
        className={classNames(Styles.earth, Styles.earth_2)}
      />
      <Image mode="aspectFit" src={STAR} className={Styles.earth} />
      {/* 火箭 */}
      <Image mode="aspectFit" src={ROCKET} className={Styles.rocket} />
      {/* 宇航员 */}
      <Image mode="aspectFit" src={ASTRONAUT} className={Styles.astronaut} />

      {/* 星星 */}
      {starList.map(() => (
        <Image
          mode="aspectFit"
          src={STAR_S}
          style={`left: ${Math.random() * 80}vw;
           top: ${Math.random() * 80}vh; 
           animationDelay: ${Math.random()}s`}
          className={Styles.star_s}
        />
      ))}

      {!!show && (
        <Image src={MONSTER_BOX} mode="aspectFit" className={Styles.box} />
      )}
    </View>
  );
};

export default Index;
