import React, { useCallback, useState } from "react";
import { AtTextarea, AtCalendar } from "taro-ui";

import { View, Text, Button, Image } from "@tarojs/components";
import { cloudFunction } from "../../services/cloudFunction";
import Styles from "./index.module.scss";

const mystery = () => {
  const [value, setValue] = useState<string>("");
  const share = () => {
    return {
      title: "转发分享", // 转发标题
      path: "" // 转发路径
      // imageUrl: 'xxxx', 自定义图片路径
    };
  };
  return (
    <View className={Styles.mystery}>
      <Text className={Styles.text}>{value || "随机生成一张心情明信片"}</Text>
      <AtTextarea
        className={Styles.textarea}
        value={value}
        maxLength={200}
        placeholder="写下你的好心情"
        onChange={v => {
          setValue(v);
        }}
      />
      <AtCalendar />
      {/* <Button open-type="share" onClick={share}>
        好友和微信群
      </Button> */}
    </View>
  );
};

export default mystery;
