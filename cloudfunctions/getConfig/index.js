// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const { code = "" } = event;
  const db = cloud.database({
    throwOnNotFound: false
  });
  const _ = db.command;
  return new Promise((resolve, reject) => {
    db.collection("config")
      .where({ code })
      .get()
      .then(res => {
        if (!!res && !!res.data && !!res.data.length) {
          resolve(res.data[0].value);
        } else {
          reject("error");
        }
      })
      .catch(() => {
        reject("error");
      });
  });
};
