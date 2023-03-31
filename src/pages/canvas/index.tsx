import React, { useCallback, useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import { cloudFunction } from "../../services/cloudFunction";
import Styles from "./index.module.scss";

const Index = () => {
  return (
    <View className={Styles.index}>
    </View>
  );
};

export default Index;
