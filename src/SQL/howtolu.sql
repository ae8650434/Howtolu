create database HowToLu default character set utf8;

use HowToLu;
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-07-23 16:15:45
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `howtolu`
--

-- --------------------------------------------------------

--
-- 資料表結構 `car`
--

CREATE TABLE `car` (
  `cid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `fid` int(11) DEFAULT NULL,
  `c_day` int(2) DEFAULT NULL,
  `use_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `quantity` int(3) NOT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `car`
--



-- --------------------------------------------------------

--
-- 資料表結構 `email_random`
--

CREATE TABLE `email_random` (
  `vid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `random` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `email_random`
--

INSERT INTO `email_random` (`vid`, `mid`, `email`, `random`) VALUES
(1, 1, 'angel08210901@gmail.com', 143981);

-- --------------------------------------------------------

--
-- 資料表結構 `food`
--

CREATE TABLE `food` (
  `fid` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `f_price` int(4) NOT NULL,
  `f_img` varchar(20) NOT NULL,
  `fc_id` int(1) NOT NULL,
  `fdetails_image` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `food`
--

INSERT INTO `food` (`fid`, `fname`, `f_price`, `f_img`, `fc_id`, `fdetails_image`) VALUES
(1, '賀呷套餐', 2500, 'food_1.png', 1, 'fdetails_1.png'),
(2, '滿漢全席', 4500, 'food_2.png', 1, 'fdetails_2.png'),
(3, '雙人套餐', 1300, 'food_3.png', 1, 'fdetails_3.png'),
(4, '素食套餐', 1500, 'food_4.png', 1, 'fdetails_4.png'),
(5, '快樂分享餐', 4000, 'food_5.png', 1, 'fdetails_5.png'),
(6, '招牌五花燒肉', 300, 'food_6.png', 2, NULL),
(7, '醬燒豬肉烤片', 300, 'food_7.png', 2, NULL),
(8, '黑胡椒牛肉片', 600, 'food_8.png', 2, NULL),
(9, '黑胡椒牛小排', 600, 'food_9.png', 2, NULL),
(10, '活力鮮蝦', 300, 'food_10.png', 2, NULL),
(11, '爆卵柳葉魚', 300, 'food_11.png', 2, NULL),
(12, '素肉排', 250, 'food_12.png', 2, NULL),
(13, '素甜不辣', 200, 'food_13.png', 2, NULL),
(14, '筊白筍', 150, 'food_14.png', 2, NULL),
(15, '生鮮青椒', 50, 'food_15.png', 2, NULL),
(16, '枸杞絲瓜鋁盒', 150, 'food_16.png', 2, NULL),
(17, '韓式泡菜', 200, 'food_17.png', 2, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `food_class`
--

CREATE TABLE `food_class` (
  `fc_id` int(1) NOT NULL,
  `class` varchar(3) NOT NULL,
  `classname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 傾印資料表的資料 `food_class`
--

INSERT INTO `food_class` (`fc_id`, `class`, `classname`) VALUES
(1, '套餐', 'combo'),
(2, '單點', 'SinglePoint');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `mid` int(11) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `password` varchar(300) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `m_img` varchar(20) DEFAULT NULL,
  `register_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `lastday_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`mid`, `tel`, `password`, `mail`, `name`, `gender`, `address`, `m_img`, `register_time`, `lastday_time`) VALUES
(1, '0975266402', 'Abff168Pp', 'angel08210901@gmail.com', '陳華華', '女', '台中市南屯區公益路二段51號', NULL, '2023-05-01 01:18:43', '2023-06-08 02:23:13'),
(2, '0911111111', '$2b$10$LH36c/SrxJwXG020/0epd.374RDGaSXPIkcChzm1h8lyquyXXKeDO', 'a1@gmail.com', '小新', NULL, NULL, '02.image', '2023-07-21 08:21:26', NULL),
(3, '0922222222', '$2b$10$rGUtSpzcK05Maus28JUfmu0qHa0WTir9T9ltVRc48g84u3Euoscfq', 'bbb@gmail.com', '小白', NULL, NULL, NULL, '2023-07-17 02:01:15', NULL),
(4, '0933333333', '$2b$10$Dc7KUFttFO94adS03sjSQeV0gtQw0ux.kqj2gYIAdRgX0J4sNZ4/2', 'aaa@gmail.com', '維尼', NULL, NULL, NULL, '2023-07-24 01:14:28', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `order`
--

CREATE TABLE `order` (
  `oid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `order_number` varchar(30) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `use_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `price` int(5) NOT NULL,
  `os` int(1) NOT NULL,
  `excel` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `order`
--

INSERT INTO `order` (`oid`, `mid`, `order_number`, `order_date`, `use_date`, `return_date`, `price`, `os`, `excel`) VALUES
(1, 4, '20230724001', '2023-07-24 01:19:51', '2023-08-08', '2023-08-10', 6300, 4, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `order_list`
--

CREATE TABLE `order_list` (
  `ol_id` int(11) NOT NULL,
  `oid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `pname` varchar(100) DEFAULT NULL,
  `p_img` varchar(20) DEFAULT NULL,
  `fid` int(11) DEFAULT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `f_img` varchar(20) DEFAULT NULL,
  `p_quantity` int(3) DEFAULT NULL,
  `f_quantity` int(3) DEFAULT NULL,
  `p_os` int(1) DEFAULT NULL,
  `f_os` int(1) DEFAULT NULL,
  `p_price` int(5) DEFAULT NULL,
  `f_price` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `order_list`
--

INSERT INTO `order_list` (`ol_id`, `oid`, `pid`, `pname`, `p_img`, `fid`, `fname`, `f_img`, `p_quantity`, `f_quantity`, `p_os`, `f_os`, `p_price`, `f_price`) VALUES
(2, 1, 1, '鐘型帳(2-6人)', 'product_1.png', NULL, '鐘型帳(2-6人)', NULL, 1800, NULL, 1, NULL, NULL, 0),
(3, 1, NULL, NULL, NULL, 2, '滿漢全席', 'food_2.png', NULL, 4500, NULL, 2, NULL, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `order_status`
--

CREATE TABLE `order_status` (
  `os` int(1) NOT NULL,
  `state` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `order_status`
--

INSERT INTO `order_status` (`os`, `state`) VALUES
(0, '租借中'),
(1, '完成'),
(2, '取消'),
(3, '未歸還'),
(4, '未完成');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `pid` int(11) NOT NULL,
  `pname` varchar(100) NOT NULL,
  `p_price` int(4) NOT NULL,
  `day` int(2) NOT NULL,
  `reserve` int(2) NOT NULL,
  `p_img` varchar(20) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `pc_id` int(3) NOT NULL,
  `information` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`pid`, `pname`, `p_price`, `day`, `reserve`, `p_img`, `description`, `pc_id`, `information`) VALUES
(1, '鐘型帳(2-6人)', 1800, 3, 20, 'product_1.png', '純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區', 1, '套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg'),
(2, '亙5.6棉布屋式帳篷(2人)', 800, 3, 19, 'product_2.png', '建議適用人數：2人(寬敞)/最多3人;建議搭帳人數：1人以上;適用場地 : 草皮區、棧板區', 1, '隨附配件：營槌、防水地布(墊於內帳下)、帳內地墊;展開尺寸：約305 x 183 x(h)150cm;收納尺寸：約66 x 25 x (h)20cm;重量：約12.3kg'),
(3, '亙4.8棉布屋式帳篷(2人)', 900, 3, 18, 'product_3.png', '建議適用人數：2人;建議搭帳人數：1人以上;適用場地 : 草皮區、棧板區', 1, '套裝內容 : 帳篷主體X1、支撐桿X4、天幕桿X2、專用營釘X20、本體攜行袋、營柱收納袋、營釘收納袋(請參考照片);隨附配件：營槌、防水地布(墊於內帳下)、帳內地墊;帳篷尺寸：235L×210W×145H(cm);收納尺寸：79L×35.5W×25H(cm);重量：約12KG'),
(4, '寢室帳(2-6人)', 900, 3, 17, 'product_4.png', '建議適用人數：2人(寬敞)/4人(舒適)/最多6人(4大2小);建議搭帳人數：1人以上;適用場地 : 草皮區、棧板區、雨棚區', 1, '套裝內容 : 帳篷本體、本體營柱x3、前庭營柱x1、標準鋁質營釘17cmx18、附調節片營繩 1.4mx2、2.5mx2、雙頭營繩5mx2、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(墊於內帳下)、帳內地墊;帳篷尺寸：540L×310W×165H(cm);內帳尺寸：300L×300W×165H(cm);收納尺寸：73L×23W×27H(cm);重量：約9.8KG'),
(5, '印地安帳(3人)', 700, 3, 16, 'product_5.png', '建議適用人數：2人(寬敞)/最多3人;建議搭帳人數：1人以上;適用場地 : 草皮區、棧板區', 1, '套裝內容 : 帳篷外帳X1、帳篷內帳X1、營柱X2、專用營釘X20、本體攜行袋、營柱收納袋、營釘收納袋;使用尺寸：W320 × D270 × H170cm;內部尺寸：W270 × D230 × H170cm;收納尺寸：W52 × D14 × H14cm;重量：3.1KG'),
(6, '印地安酋長帳(4-8人)', 1200, 3, 15, 'product_6.png', '建議適用人數：4人(寬敞)/最多8人;建議搭帳人數：1人以上;適用場地 : 草皮區、棧板區、雨棚區', 1, '套裝內容 : 帳篷外帳X1、帳篷內帳X1、本體營柱X1、專用營釘X20、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(墊於內帳下)、帳內地墊;帳篷尺寸：460L×460W×300H(cm);內帳尺寸：410L×360W×300H(cm);收納尺寸：62L×25W×25H(cm);重量：約12KG'),
(7, '客廳帳篷(10人)', 600, 3, 20, 'product_7.png', '建議適用人數：10人；建議搭帳人數：1人以上；適用場地 : 草皮區、棧板區、雨棚區', 2, '套裝內容 : 天幕本體、營柱X2、營釘X8、營繩X6、連結調整繩、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌;天幕尺寸：570L×500W×280H(cm);收納尺寸：80L×17W×22H(cm);重量：約7KG'),
(8, '天幕(米色)', 300, 3, 19, 'product_8.png', '建議適用人數：4人；建議搭帳人數：1人以上；適用場地 : 草皮區', 2, '套裝內容 : 天幕本體、營柱X2、營釘X8、營繩X2、連結調整繩、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌;天幕尺寸：410L×400W×230H(cm);收納尺寸：14L×67W×14H(cm);重量：約4.7KG'),
(9, '天幕(棕色)', 400, 3, 18, 'product_9.png', '建議適用人數：4~6人;建議搭帳人數：1人以上;適用場地 : 草皮區', 2, '套裝內容 : 天幕本體、營柱X2、營釘X8、營繩X6、連結調整繩、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌;天幕尺寸：570L×500W×280H(cm);收納尺寸：80L×17W×22H(cm);重量：約7KG'),
(10, '單人充氣睡墊', 150, 3, 10, 'product_10.png', '建議適用人數：1人;自動充氣睡墊，放開自動充氣;特別加厚產品，舒適性、保暖性絕佳;床墊尺寸：193L×63.5W×8.89H(cm)', 3, '隨附配件：電動充氣幫浦;床墊尺寸：193L×63.5W×8.89H(cm);收納尺寸：20L×65W×20H(cm);重量：約2KG'),
(11, '空氣床(M size)', 500, 3, 10, 'product_11.png', '建議適用人數：2人(成人);充氣尺寸：196×148×17(CM);高穩定度晃動幅度小', 3, '套裝內容 : 漫步雲端空氣床(L)、電動充氣機、床包、攜行袋;充氣尺寸：253×204×15(cm);收納尺寸：72×40×20(cm);重量：11.5kg'),
(12, '空氣床(L size)', 700, 3, 10, 'product_12.png', '建議適用人數：3~4人(成人);充氣尺寸：253×204×15(cm);高穩定度晃動幅度小', 3, '套裝內容 : 漫步雲端空氣床(L)、電動充氣機、床包、攜行袋;充氣尺寸：253×204×15(cm);收納尺寸：72×40×20(cm);重量：11.5kg'),
(13, '空氣床(XL size)', 800, 3, 10, 'product_13.png', '建議適用人數：4~5人(成人);充氣尺寸：289×196×17(cm);高穩定度晃動幅度小', 3, '套裝內容 : 漫步雲端空氣床(XL)、電動充氣機、床包、攜行袋;充氣尺寸：289×196×17(cm);收納尺寸：72×40×20(cm);重量：12KG'),
(14, '低座折疊椅(沙色)', 100, 3, 20, 'product_14.png', '耐重80公斤;鋁合金質骨架;椅背後方附網袋方便收納隨身物品', 4, '套裝內容 : KZM KAZMI 低座折疊椅(沙色)、攜行袋;展開尺寸：54×48×66(cm);收納尺寸：54×8.5×65(cm);重量：4.5KG'),
(15, '低座折疊椅(黑色)', 100, 3, 20, 'product_15.png', '耐重80公斤;鋁合金質骨架;椅背後方附網袋方便收納隨身物品', 4, '套裝內容 : KZM KAZMI 低座折疊椅(黑色)、攜行袋;展開尺寸：54×48×66(cm);收納尺寸：54×8.5×65(cm);重量：4.5KG'),
(16, '可調式高背摺疊椅(沙色)', 150, 3, 15, 'product_16.png', '四段式調節，可坐可躺徜徉大自然;舒適頭枕設計釋放您所有壓力;耐重80公斤;鋁合金質骨架;椅背後方附網袋方便收納隨身物品', 4, '套裝內容 : KZM KAZMI 可調式高背摺疊椅(沙色)、頭枕、攜行袋;展開尺寸：61×65×95H(cm);收納尺寸：23×23×99H(cm);重量：4.8KG'),
(17, '可調式高背摺疊椅(黑色)', 150, 3, 14, 'product_17.png', '四段式調節，可坐可躺徜徉大自然;舒適頭枕設計釋放您所有壓力;耐重80公斤;鋁合金質骨架;椅背後方附網袋方便收納隨身物品', 4, '套裝內容 : KZM KAZMI 可調式高背摺疊椅(黑色)、頭枕、攜行袋;展開尺寸：61×65×95H(cm);收納尺寸：23×23×99H(cm);重量：4.8KG'),
(18, '櫸木蛋捲桌', 250, 3, 10, 'product_18.png', '建議適用人數：4~6人;展開尺寸：120×60×43(cm);高質感櫸木怎樣拍都美;收納簡易方便好攜帶', 4, '套裝內容 : 蛋捲桌面、摺疊桌腳、攜行袋;展開尺寸：120×60×43(cm);收納尺寸：70×26×17(cm);重量：10KG'),
(19, '卡式瓦斯爐', 250, 3, 10, 'product_19.png', '1400克的重量，容易放入收納袋的尺寸，讓您可以輕鬆將它帶到各種戶外場地;展開後包主體和爐架的四點支撐，讓它可以放上更大的鍋具（相應的鍋具直徑：最小φ14cm至最大φ30cm）', 5, '展開尺寸 : 346×301×120（ｈ）ｍｍ;收納尺寸 : 90×120×255（ｈ）ｍｍ;重量 : 1.4kg;出力 : 2,100kcal／h;需自備瓦斯罐'),
(20, '自動製冰機', 400, 3, 20, 'product_20.png', '微電腦全自動製冰;上開式透明掀蓋，無須掀蓋即可檢視冰塊存量;每24小時可製冰12KG;兩種尺寸冰塊，滿足不同需求', 6, '冰桶尺寸：38×38×28(cm);冰桶內尺寸：32×35×高28(cm);重量：7.8KG'),
(21, '拉桿冰桶', 200, 3, 20, 'product_21.png', '38L空間可容納56瓶350ml鋁罐;手把式拉桿搭配底部雙輪，平行移動超省力;頂部飲料杯架設計', 6, '冰桶尺寸：58×35×45(cm);冰桶內尺寸：上47×25×(cm)/下35×20(cm)/高33(cm);重量：4.3KG'),
(22, 'LED手提鐵路復古營燈(白色)', 200, 3, 16, 'product_22.png', '美學露營必備照明;參考二戰前北美鐵路公司使用的鐵路燈籠設計;連續照明時間: 3.5小時(200流明)~100小時(35流明)', 7, '電池類型: 鋰電池;重量: 960G;照明半徑: 3(M);電池容量: 4400MAH;最大功率: 3.2W;光譜：3000K;流明：最高亮度200流明、最低亮度35流明'),
(23, 'LED手提鐵路復古營燈(黑色)', 200, 3, 15, 'product_23.png', '美學露營必備照明;參考二戰前北美鐵路公司使用的鐵路燈籠設計;連續照明時間: 3.5小時(200流明)~100小時(35流明)', 7, '電池類型: 鋰電池;重量: 960G;照明半徑: 3(M);電池容量: 4400MAH;最大功率: 3.2W;光譜：3000K;流明：最高亮度200流明、最低亮度35流明'),
(24, 'LED復古露營燈', 150, 3, 20, 'product_24.png', '美學露營必備照明;可當行動電源使用;連續照明時間: 3.8~7.5小時;可切換照明模式(一般/呼吸燈/閃爍)', 7, '電池類型: 鋰電池;重量: 600g;連續照明時間: 3.8~7.5小時;照明半徑: 3(m);防水性能: IPX4;電池容量: 5200mAh;最大功率: 6W'),
(25, 'LED燈泡式氣氛燈串', 100, 3, 14, 'product_25.png', '風格露營必備照明設備;單條7.6公尺可串接;塑膠燈殼不擔心破損;防水等級: IP44', 7, '尺寸：7.6公尺，燈泡直徑40mm;燈泡數量：25顆;色溫: 2500K 暖白色;功率瓦數：約為0.7W/顆，整組約18W;燈泡亮度：單顆約70~80流明;使用電壓：110V;重量：約560g'),
(26, '攜帶式藍芽喇叭', 500, 3, 10, 'product_26.png', '絕佳的戶外音樂體驗;經典復古設計增添您的風格露營;不受電線的限制，一次充電即可提供 20 多個小時的便攜式播放時間', 8, '套裝內容 :  Kilburn II 藍芽喇叭、充電線、攜行保護殼;產品尺寸：243 x 162 x 140 mm;重量：3kg;電源供應 110~220V;響應頻率 52-20000 Hz;音源播放模式 5.0 aptX藍芽連接/3.5mm音源孔;高音單體 D類擴大器8W*2，低音單體 D類擴大器20W*1'),
(27, 'HD智慧投影機', 500, 3, 9, 'product_27.png', '內建Netfliex、Youtube;內建Android TV 9.0系統+藍牙5.0;提供HDMI及USB端口輸入影音;採用5W*2左右聲道喇叭,帶給你360°全向澎湃音效', 8, '套裝內容: Wanbo Full HD智慧投影機、遙控器、電源線、攜行保護盒、投影布幕(含營繩*4);可搭配相機三腳架使用;另可租借落地式100吋戶外投影支架布幕搭配使用'),
(28, '露營專用落地式支架布幕', 150, 3, 9, 'product_28.png', '100吋布幕;布料90%高遮光率;拆裝容易方便攜袋', 8, '套裝內容 : 100吋幕面、連接管x6、底部支柱x4、轉接口x2、底座x2、短鋁管x6、長鋁管x3、攜行袋;收納尺寸 : 83x17x9.5(cm)'),
(29, '戶外陶瓷電暖爐(沙色)', 200, 3, 20, 'product_29.png', '輕巧設計，不佔空間;溫度控制旋鈕設計;安全傾倒開關設計;500W PTC陶瓷式瞬間加熱', 9, '額定電壓/電頻: 110V/60Hz;安全裝置: 溫度保險絲、傾倒自動斷電裝置;溫度控制: 旋鈕式控制;外殼材質: ABS;電源線長度: 130cm;商品尺寸: 13×10.5x17cm;本體重量：0.75kg'),
(30, '雙人電熱毯(不指定花色)', 200, 3, 20, 'product_30.png', '變頻式恆溫，７段溫度調節;過熱/異常斷電保護功能', 9, '產品尺寸：雙人140x180cm±5cm;產品電壓：AC110V/60Hz;消耗功率：200W;最高溫度：60°C±10°C;材質成分：合成纖維'),
(31, '吊掛磁吸LED燈立扇', 100, 3, 18, 'product_31.png', '三段可調依需求提供不同風量;站立/吊掛/手提多種使用方式;兩種色溫冷/暖光，無段式可微調亮度，室內，野外，停電緊急需求;開關底座可搭配照明夜燈或是風扇主體個別使用', 10, '套裝內容 : 風扇主體 x 1 / 電源充電手提燈座 x 1 / 三角立架 x 1 / 照明夜燈 x 1 / Type-C充電線 x 1 / 操作使用說明書 x 1;尺寸 : 171x206x334mm;電壓 : DC-5V-2A;電池 : 8000mAh;風力段數 : 3段風速;充滿電可使用約5.5小時;重量 : 726g'),
(32, '戶外延長動力線(15M)', 100, 3, 10, 'product_32.png', '顏色:軍綠;過載斷電;搭載通電指示燈，兩蕊三插頭設計', 10, '套裝內容 :戶外延長動力線15M(軍綠)、專用攜行袋;尺寸：15M;重量：1.8kg');

-- --------------------------------------------------------

--
-- 資料表結構 `product_class`
--

CREATE TABLE `product_class` (
  `pc_id` int(2) NOT NULL,
  `class` varchar(10) NOT NULL,
  `image` varchar(20) NOT NULL,
  `classname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 傾印資料表的資料 `product_class`
--

INSERT INTO `product_class` (`pc_id`, `class`, `image`, `classname`) VALUES
(1, '寢室帳篷', 'product_1.png', 'tent'),
(2, '客廳帳&天幕', 'product_7.png', 'canopy'),
(3, '寢室用具', 'product_10.png', 'mattress'),
(4, '戶外用品', 'product_14.png', 'outdoor'),
(5, '爐具', 'product_19.png', 'stove'),
(6, '保鮮保冷', 'product_20.png', 'fresh'),
(7, '燈具', 'product_22.png', 'lamp'),
(8, '影音設備', 'product_26.png', 'audio'),
(9, '保暖裝備', 'product_29.png', 'warm'),
(10, '常用配件', 'product_31.png', 'accessories');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`cid`);

--
-- 資料表索引 `email_random`
--
ALTER TABLE `email_random`
  ADD PRIMARY KEY (`vid`);

--
-- 資料表索引 `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`fid`);

--
-- 資料表索引 `food_class`
--
ALTER TABLE `food_class`
  ADD PRIMARY KEY (`fc_id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`mid`),
  ADD KEY `tel` (`tel`,`mail`);

--
-- 資料表索引 `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`oid`);

--
-- 資料表索引 `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`ol_id`);

--
-- 資料表索引 `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`os`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pid`);

--
-- 資料表索引 `product_class`
--
ALTER TABLE `product_class`
  ADD PRIMARY KEY (`pc_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `car`
--
ALTER TABLE `car`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `email_random`
--
ALTER TABLE `email_random`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `food`
--
ALTER TABLE `food`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `food_class`
--
ALTER TABLE `food_class`
  MODIFY `fc_id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order`
--
ALTER TABLE `order`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_list`
--
ALTER TABLE `order_list`
  MODIFY `ol_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_class`
--
ALTER TABLE `product_class`
  MODIFY `pc_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;