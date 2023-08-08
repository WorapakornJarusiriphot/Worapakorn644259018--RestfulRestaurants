-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2023 at 08:30 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurantss`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageURL`, `createdAt`, `updatedAt`) VALUES
(1, 'McDonald\'s (แมคโดนัลด์) - ราชดำเนิน', 'แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/f193b34375f84a0fb1b2b58e4320be3f_1688317413588921068.webp', NULL, NULL),
(2, 'MK Restaurants (เอ็มเค เรสโตรองต์) - อินเดีย เอ็มโพเรียม', 'ชาบู/สุกี้', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-CYTXLBAABCBXVJ/list/2e6bc70110564851b3257fceb7d2c0fb_1614522037447498878.webp', NULL, NULL),
(3, 'KFCCCCC', 'KFCCCCC', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/THGFIST000007ad/hero/754914e22b1140e29572534f57c976d2_1688471924205682592.webp\"', NULL, NULL),
(4, 'Burger King (เบอร์เกอร์ คิง) - จักรพงษ์', 'แฮมเบอร์เกอร์, สเต็ก, ไก่ทอด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2DKRBKGC3B3MA/hero/1ddc503777ca4c3bbcbbd41917d6186f_1688317420468055794.webp', NULL, NULL),
(5, 'Shinkanzen Sushi (ชินคันเซ็น ซูชิ) - เมเจอร์ ปิ่นเกล้า', 'อาหารตามสั่ง', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C34HVY4HJGDWL2/hero/dcd1568122b842da980f3224449f4ff7_1688317407364289751.webp', NULL, NULL),
(6, 'http://localhost:5000/restaurantsนิน', 'http://localhost:5000/restaurants์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/f193b34375f84a0fb1b2b58e4320be3f_1688317413588921068.webp', NULL, NULL),
(8, 'Shinkanzen Sushi (ชินคันเซ็น ซูชิ) - เมเจอร์ ปิ่นเกล้า', 'อาหารตามสั่ง', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C34HVY4HJGDWL2/hero/dcd1568122b842da980f3224449f4ff7_1688317407364289751.webp', '2023-07-19', '2023-07-19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
