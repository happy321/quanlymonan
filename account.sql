-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 13, 2019 lúc 06:47 PM
-- Phiên bản máy phục vụ: 10.1.28-MariaDB
-- Phiên bản PHP: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sinhvien12`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `tenmon` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `gia` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `mota` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `anh` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `tenmon`, `gia`, `mota`, `anh`) VALUES
(3, 'xÃ´i tháº­p cáº©m', '20k', 'xÃ´i 7 mÃ u thÆ¡m ngon', 'https://image1.phunuphapluat.vn/2018/11/01/cac-mon-an-ngay-tet-cua-dan-toc-thieu-so-la-lam-nhung-vo-cung-dac-sac-234250.jpg'),
(4, 'gÃ  nÆ°á»›ng', '100k', 'gÃ  nÆ°á»›ng mÃ³n Äƒn dÃ¢n tá»™c thÃ¡i', 'https://media.metrip.vn/images/h8%27(1).jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`tenmon`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
