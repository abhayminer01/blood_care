-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2024 at 07:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blood_care`
--

-- --------------------------------------------------------

--
-- Table structure for table `blood_inventory`
--

CREATE TABLE `blood_inventory` (
  `inventory_id` int(11) NOT NULL,
  `blood_group` varchar(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blood_inventory`
--

INSERT INTO `blood_inventory` (`inventory_id`, `blood_group`, `quantity`, `last_updated`) VALUES
(1, 'A+', 450, '2024-09-27 02:13:44'),
(2, 'B+', 550, '2024-09-29 03:20:46'),
(3, 'A-', 200, '2024-09-29 03:46:24'),
(4, 'B-', 700, '2024-09-29 03:46:35'),
(6, 'AB+', 800, '2024-09-29 03:46:55'),
(7, 'AB-', 300, '2024-09-29 03:47:03'),
(8, 'O+', 950, '2024-09-29 03:47:16'),
(9, 'O-', 0, '2024-09-29 03:47:25');

-- --------------------------------------------------------

--
-- Table structure for table `blood_request`
--

CREATE TABLE `blood_request` (
  `request_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `blood_group` varchar(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `urgency` enum('low','medium','high') NOT NULL,
  `status` enum('none','accept','decline') NOT NULL DEFAULT 'none',
  `location` varchar(200) NOT NULL,
  `requested_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blood_request`
--

INSERT INTO `blood_request` (`request_id`, `user_id`, `blood_group`, `amount`, `urgency`, `status`, `location`, `requested_at`) VALUES
(1, 23, 'o+', 500, 'medium', 'none', 'poovachal', '2024-09-26 14:23:08'),
(2, 23, 'a+', 500, 'high', 'none', 'poovachal', '2024-09-28 13:38:27'),
(3, 23, 'none', 0, 'low', 'none', '', '2024-09-29 14:46:33'),
(4, 23, 'a+', 500, 'high', 'none', 'Tholicode', '2024-09-30 17:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `donation_id` int(11) NOT NULL,
  `donor_id` int(11) NOT NULL,
  `blood_group` varchar(20) NOT NULL,
  `donation_date` date NOT NULL,
  `location` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donors`
--

CREATE TABLE `donors` (
  `donor_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `blood_group` varchar(30) NOT NULL,
  `body_weight` int(11) NOT NULL,
  `availability` enum('available','unavailable') NOT NULL,
  `total_donations` int(11) NOT NULL,
  `location` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donors`
--

INSERT INTO `donors` (`donor_id`, `user_id`, `blood_group`, `body_weight`, `availability`, `total_donations`, `location`) VALUES
(1, 23, 'a+', 50, 'available', 0, ''),
(2, 23, 'a+', 50, 'available', 0, ''),
(3, 23, 'B+', 50, 'available', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `user_creds`
--

CREATE TABLE `user_creds` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `permission` enum('user','admin','donor-manager') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_creds`
--

INSERT INTO `user_creds` (`id`, `name`, `email`, `password`, `permission`) VALUES
(23, 'AbhayVijayan', 'abhayvapvl@gmail.com', 'AbhayMiner@123', 'admin'),
(29, 'AbhayVijayan', 'abhay@gmail.com', 'abhay', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blood_inventory`
--
ALTER TABLE `blood_inventory`
  ADD PRIMARY KEY (`inventory_id`);

--
-- Indexes for table `blood_request`
--
ALTER TABLE `blood_request`
  ADD PRIMARY KEY (`request_id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `donors`
--
ALTER TABLE `donors`
  ADD PRIMARY KEY (`donor_id`);

--
-- Indexes for table `user_creds`
--
ALTER TABLE `user_creds`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blood_inventory`
--
ALTER TABLE `blood_inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `blood_request`
--
ALTER TABLE `blood_request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `donation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `donors`
--
ALTER TABLE `donors`
  MODIFY `donor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_creds`
--
ALTER TABLE `user_creds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
