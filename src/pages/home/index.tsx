import React, { useCallback, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import { cloudFunction } from "../../services/cloudFunction";
import Styles from "./index.module.scss";

const Index = () => {
  const [imgList, setImgList] = useState<string[]>([]);
  const handlePic = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function(res) {
        console.log(res);
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        setImgList(res.tempFilePaths);
      }
    });
  };
  const handleCopy = item => {
    Taro.setClipboardData({
      data: item,
      success: function() {
        Taro.showToast({ title: "复制成功", icon: "success", duration: 1000 });
      }
    });
  };

  return (
    <View className={Styles.upload}>
      <Button onClick={handlePic}>图片上传</Button>
      {!!imgList &&
        !!imgList.length &&
        imgList.map(item => (
          <View>
            <Text>
              {item}
            </Text>
            <Image src={item}></Image>
            <Button onClick={() => handleCopy(item)}>复制图片链接</Button>
          </View>
        ))}
    </View>
  );
};

export default Index;
