var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");
var multer = require("multer");
var path = require("path");
var fs = require("fs");

app.get("/", (req, res) => {
  var account = req.query.account;
  // console.log(account);
  var sql = "SELECT * FROM member WHERE tel = ?";
  DB.query(sql, [account], (err, data) => {
    if (err) {
      return res.status(500).send("Error");
    }

    if (data.length === 0) {
      return res.status(401).send("未登入");
    } else {
      return res.status(200).json({ userdata: data[0] });
    }
  });
});

var insertm =
  "UPDATE member SET mail = ?, name = ?, gender = ?, address = ? WHERE mid = ?";
var insertmall =
  "UPDATE member SET password = ? , mail = ?, name = ?, gender = ?, address = ?, m_img = ? WHERE mid = ?";
var nopassword =
  "UPDATE member SET mail = ?, name = ?, gender = ?, address = ?, m_img = ? WHERE mid = ?";
var noimage =
  "UPDATE member SET mail = ?, name = ?, gender = ?, address = ?, m_img = ? WHERE mid = ?";
// 定义 multer 存储配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public/image");
  },
  filename: function (req, file, cb) {
    console.log("rejo", file);
    const user = req.body.user;
    const first = user.m_img.split("/")[1];
    const second = first.split(";")[0]; // 副檔名
    const newFileName = `0${user.mid}.${second}`;
    console.log("ff", newFileName);
    cb(null, newFileName);
  },
});

// 创建 multer 实例
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== "image/jpg") {
      const error = new Error("Only JPG images are allowed");
      error.code = "LIMIT_FILE_TYPES";
      return cb(error);
    }
    cb(null, true);
  },
});

app.post("/member", upload.single("m_img"), (req, res) => {
  const user = req.body.user;
  var b = user.m_img.split(".")[1];
  var a = user.m_img.substring(6, 7);
  console.log("2231", user.m_img);

  var first = user.m_img.split("/")[1];
  var second = first.split(";")[0]; // 副檔名
  var newFileName;
  var isBase64Image = false; // 判斷是否是 base64 格式的圖片
  if (a != "0") {
    newFileName = `0${user.mid}.${second}`;
    isBase64Image = true; // 如果有 'image/0'，則是 base64 格式的圖片
    console.log("check1", newFileName);
  } else {
    var img = user.m_img.split("/")[1];
    newFileName = img;
    console.log("check2", newFileName);
  }

  console.log("check3", newFileName);

  // 解析 Base64 碼成圖片
  const base64Data = user.m_img.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(base64Data, "base64");
  const imagePath = path.join(__dirname, `../../public/image/${newFileName}`); // 新增這行在這裡

  // 檢查檔案是否存在的函數
  function checkFileExists(imagePath, imageBuffer) {
    if (fs.existsSync(imagePath)) {
      // 檔案存在，刪除舊圖片
      deleteOldImage(imagePath, user);
      // 寫入新圖片
      fs.writeFileSync(imagePath, imageBuffer);
      return true;
    } else {
      // 檔案不存在，新增檔案
      fs.writeFileSync(imagePath, imageBuffer);
      return true;
    }
  }

  // 刪除舊圖片的函數
  function deleteOldImage(oldImagePath, user) {
    if (oldImagePath !== "/image/Head.png") {
      const imageName = path.basename(oldImagePath);
      const userImageName = `0${user.mid}.${imageName.split(".")[1]}`;
      if (imageName !== userImageName) {
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    }
  }

  if (isBase64Image && second != "jpg" && user.m_img != "/image/Head.png") {
    return res.status(400).send("只允許上傳 JPG 格式的圖片");
  } else {
    // console.log('8687', user.m_img)
    if (!user.m_img.startsWith("image/0")) {
      if (user.new_password !== "") {
        // 密碼加密
        const saltRounds = 10;
        bcrypt.hash(user.new_password, saltRounds, (err, hash) => {
          if (err) {
            console.error(err);
            res.status(500).send("密碼加密過程中發生錯誤");
            return;
          }

          // 根據密碼和圖片是否更新，選擇執行不同的資料庫更新語句
          if (user.new_password !== "" && user.m_img !== "/image/Head.png") {
            
            // 圖片和密碼都有更新
            DB.query(
              insertmall,
              [
                hash,
                user.mail,
                user.name,
                user.gender,
                user.address,
                newFileName,
                user.mid,
              ],
              (err, result) => {
                if (err) {
                  return res.status(500).send("資料庫更新錯誤");
                } else {
                  console.log("1", result);
                  if (checkFileExists(imagePath, imageBuffer, user)) {
                    return res.status(200).send("更新成功");
                  }
                }
              }
            );
          } else if (
            user.new_password === "" &&
            user.m_img !== "/image/Head.png"
          ) {
            // 只有圖片更新
            DB.query(
              nopassword,
              [
                user.mail,
                user.name,
                user.gender,
                user.address,
                newFileName,
                user.mid,
              ],
              (err, result) => {
                if (err) {
                  return res.status(500).send("資料庫更新錯誤");
                } else {
                  console.log("2", result);
                  if (checkFileExists(imagePath, imageBuffer, user)) {
                    return res.status(200).send("更新成功");
                  }
                }
              }
            );
          } else if (
            user.new_password !== "" &&
            user.m_img === "/image/Head.png"
          ) {
            // 只有密碼更新
            DB.query(
              noimage,
              [hash, user.mail, user.name, user.gender, user.address, user.mid],
              (err, result) => {
                if (err) {
                  return res.status(500).send("資料庫更新錯誤");
                } else {
                  console.log("3", result);
                  return res.status(200).send("更新成功");
                }
              }
            );
          } else {
            // 密碼和圖片都沒有更新，可以在此處添加相應的處理邏輯
            DB.query(
              insertm,
              [user.mail, user.name, user.gender, user.address, user.mid],
              (err, result) => {
                if (err) {
                  return res.status(500).send("資料庫更新錯誤");
                } else {
                  console.log("4", result);
                  return res.status(200).send("更新成功");
                }
              }
            );
          }
        });
      } else {
        // 密碼為空，不進行加密和更新
        if (user.m_img !== "/image/Head.png") {
          // 只有圖片更新
          DB.query(
            nopassword,
            [
              user.mail,
              user.name,
              user.gender,
              user.address,
              newFileName,
              user.mid,
            ],
            (err, result) => {
              if (err) {
                return res.status(500).send("資料庫更新錯誤");
              } else {
                console.log("5", result);
                if (checkFileExists(imagePath, imageBuffer, user)) {
                  return res.status(200).send("更新成功");
                }
              }
            }
          );
        } else {
          // 密碼和圖片都沒有更新，可以在此處添加相應的處理邏輯
          DB.query(
            insertm,
            [user.mail, user.name, user.gender, user.address, user.mid],
            (err, result) => {
              if (err) {
                return res.status(500).send("資料庫更新錯誤");
              } else {
                console.log("6", result);
                return res.status(200).send("更新成功");
              }
            }
          );
        }
      }
    } else if(user.new_password == "" &&
    (user.m_img.startsWith("image/0") || user.m_img === "/image/Head.png" )) {
      DB.query(
        insertm,
        [user.mail, user.name, user.gender, user.address, user.mid],
        (err, result) => {
          if (err) {
            return res.status(500).send("資料庫更新錯誤");
          } else {
            console.log("7", result);
            return res.status(200).send("更新成功");
          }
        }
      );

    }
    
    else {
      console.log("8");
      const imagePath = path.join(
        __dirname,
        `../../public/image/${newFileName}`
      );
      checkFileExists(imagePath, imageBuffer);
    }
  }
});

// 錯誤處理中間件
app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPES") {
    console.log("3222");
    return res.status(400).send("只允許上傳 JPG 格式的圖片");
  }
  res.status(500).send("伺服器錯誤");
});

module.exports = app;
