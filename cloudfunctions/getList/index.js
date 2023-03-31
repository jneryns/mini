// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database({
    throwOnNotFound: false
  })
  return new Promise((resolve, reject) => {
    db.collection('list')
      .get()
      .then(res => {
        resolve(res)
      })
      .catch(() => {
        reject('error')
      })
  })
}
