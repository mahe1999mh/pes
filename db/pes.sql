-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2024 at 12:58 PM
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
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `auditorium`, `start_date`, `start_time`, `end_date`, `end_time`, `is_pending`, `user_id`) VALUES
(1, '1', '2024-02-20', '09:00:00', '2024-02-20', '11:00:00', 1, 13),
(3, '1', '2024-02-21', '09:00:00', '2024-02-22', '11:00:00', 2, 13),
(4, '1', '2024-02-16', '22:49:00', '2024-02-17', '00:49:00', 1, 12),
(5, '4', '2024-02-17', '15:27:00', '2024-02-19', '15:23:00', 2, 12),
(6, '5', '2024-02-22', '15:29:00', '2024-02-21', '14:28:00', 1, 12),
(7, '4', '2024-02-17', '12:59:00', '2024-02-21', '15:00:00', 1, 13),
(8, '8', '2024-02-24', '17:42:00', '2024-02-29', '18:42:00', 1, 13);

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
(9, 'David Taylor', 'david@example.com', NULL, '2024-02-14 22:51:34', '2024-02-14 22:51:34', 'passwordabc', 1),
(12, 'JohnDoe', 'john.ddoe@example.com', '322234', '2024-02-14 23:15:27', '2024-02-14 23:15:27', '$2b$10$tgk/YJSv6YlJ3qYIgz1uh.m2ZXtPeFO2.7LdJAnOSG0nOIDDixWSG', 0),
(13, 'mahendra', 'mahe@gmail.com', '888777666', '2024-02-15 21:48:49', '2024-02-15 21:48:49', '$2b$10$flkyy22zdssXr/P7vsud8.RPVVsvr/KE0oQHaBTitDDTKbYQLxLv.', 0);

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
