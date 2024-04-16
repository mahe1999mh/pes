-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 08:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pes`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password_hash`) VALUES
(1, 'admin@gmail.com', '$2b$10$/nyvh0c11..UOs9tXbmLF.mes5Miiblh5gdLEewnbtgzadT41jQPq');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `auditorium` varchar(50) NOT NULL,
  `start_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_date` date NOT NULL,
  `end_time` time NOT NULL,
  `is_pending` int(11) NOT NULL DEFAULT 1,
  `user_id` int(11) DEFAULT NULL,
  `row_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `auditorium`, `start_date`, `start_time`, `end_date`, `end_time`, `is_pending`, `user_id`, `row_id`) VALUES
(9, '2', '2024-04-17', '03:14:00', '2024-04-18', '03:01:00', 3, 26, 19974);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `password_hash` varchar(255) NOT NULL,
  `is_verified` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone_number`, `created_at`, `updated_at`, `password_hash`, `is_verified`) VALUES
(12, 'JohnDoe', 'john.ddoe@example.com', '322234', '2024-02-14 23:15:27', '2024-02-14 23:15:27', '$2b$10$tgk/YJSv6YlJ3qYIgz1uh.m2ZXtPeFO2.7LdJAnOSG0nOIDDixWSG', 0),
(13, 'mahendra', 'mahe@gmail.com', '888777666', '2024-02-15 21:48:49', '2024-02-15 21:48:49', '$2b$10$flkyy22zdssXr/P7vsud8.RPVVsvr/KE0oQHaBTitDDTKbYQLxLv.', 0),
(17, 'MHR', '1234@gmail.com', '8887776644', '2024-02-17 21:51:45', '2024-02-17 21:51:45', '$2b$10$YH109a9ZOdLkZBjK0rZj5eZTfdRKrUOFWzMI9huyAeoRZMNtd5Ugi', 0),
(18, 'MHR', 'mahe112@gmail.com', '392472364', '2024-02-17 21:54:40', '2024-02-17 21:54:40', '$2b$10$1PO71NCDTBS3zMNM0YyJI.pWWrF69kl1qTEO/J6/IR.BaGix/GFPe', 0),
(19, 'kj', '123@gmail.com', '21', '2024-02-17 21:55:54', '2024-02-17 21:55:54', '$2b$10$BBoQ7UqUfY0YIWC90ajBduFnxrA9b8Q.TfoROJr5akDo7QuNM.SpO', 0),
(25, 'admin', 'admin@gmail.com', '8887776661', '2024-03-07 22:29:33', '2024-03-07 22:29:33', '$2b$10$/nyvh0c11..UOs9tXbmLF.mes5Miiblh5gdLEewnbtgzadT41jQPq', 0),
(26, 'mh@gmail.com', 'mh@gmail.com', '888', '2024-04-17 00:10:07', '2024-04-17 00:10:07', '$2b$10$iPf0V33DmAS1ikZQEmhCAeED3De.DY85De9Y0SMd3Nif0uwrBtMHC', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
