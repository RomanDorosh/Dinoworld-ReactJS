-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 11, 2021 at 09:44 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dino_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `continent`
--

CREATE TABLE `continent` (
  `continent_id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `continent`
--

INSERT INTO `continent` (`continent_id`, `name`) VALUES
(101, 'South America'),
(102, 'North America'),
(103, 'Europe'),
(104, 'Asia'),
(105, 'Africa');

-- --------------------------------------------------------

--
-- Table structure for table `diet`
--

CREATE TABLE `diet` (
  `diet_id` int NOT NULL,
  `name` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `diet`
--

INSERT INTO `diet` (`diet_id`, `name`) VALUES
(201, 'Carnivore'),
(202, 'Herbivore');

-- --------------------------------------------------------

--
-- Table structure for table `dinosaur`
--

CREATE TABLE `dinosaur` (
  `dinosaur_id` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `weight` int DEFAULT NULL,
  `height` decimal(3,1) DEFAULT NULL,
  `diet_id` int DEFAULT NULL,
  `top_speed` int DEFAULT NULL,
  `lenght` int DEFAULT NULL,
  `period_id` int DEFAULT NULL,
  `continent_id` int DEFAULT NULL,
  `img` varchar(250) DEFAULT NULL,
  `top` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dinosaur`
--

INSERT INTO `dinosaur` (`dinosaur_id`, `name`, `weight`, `height`, `diet_id`, `top_speed`, `lenght`, `period_id`, `continent_id`, `img`, `top`) VALUES
(1, 'Stegosaurus', 7000, '5.0', 202, 7, 9, 302, 102, 'https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-09.jpg', 1),
(2, 'Brachiosaurus', 35000, '15.0', 202, 8, 25, 302, 102, 'https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-12.jpg', 1),
(3, 'Ankylosaurus', 5000, '1.6', 202, 10, 6, 302, 102, 'https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-11.jpg', 1),
(4, 'Diplodocus', 12000, '6.0', 202, 15, 32, 302, 102, 'https://www.wennoanimal.com/uploads/animals/original/img_diplodocus.jpg', 1),
(5, 'Dracoraptor', 40, '1.0', 202, 25, 3, 302, 103, 'https://images.dinosaurpictures.org/Dracoraptor/news-dracoraptor_0f29.jpg', 0),
(6, 'Pterodactylus', 150, '1.0', 201, 60, 2, 302, 103, 'https://www.wennoanimal.com/uploads/animals/original/Pterosaur.jpg', 1),
(7, 'Allosaurus', 2500, '3.0', 201, 30, 9, 302, 102, 'https://cdna.artstation.com/p/assets/images/images/012/701/066/large/albert-brigos-allosaurus-v2.jpg?1536085079', 0),
(8, 'Iguanodon', 3200, '3.5', 202, 30, 10, 302, 103, 'https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-08.jpg', 0),
(9, 'Dilophosaurus', 400, '3.5', 201, 38, 6, 302, 102, '      https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-11.jpg', 0),
(10, 'Plesiosaurus', 500, '1.0', 201, 16, 4, 302, 103, '            https://www.wennoanimal.com/uploads/animals/original/img_plesiosaurus.jpg\r\n', 0),
(11, 'Tyrannosaurus', 7500, '5.0', 201, 40, 12, 303, 102, '                  https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-15.jpg\r\n\r\n', 1),
(12, 'Triceratops', 12000, '5.0', 202, 30, 8, 303, 102, '           https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-10.jpg\r\n', 1),
(13, 'Velociraptop', 15, '0.7', 201, 64, 2, 303, 104, '                https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-12.jpg\r\n', 1),
(14, 'Spinosaurus', 8300, '7.0', 201, 18, 15, 303, 101, '                      https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-13.jpg\r\n', 1),
(15, 'Amargasaurus', 2600, '2.5', 202, 25, 10, 303, 101, '                            https://www.wennoanimal.com/uploads/animals/original/img_amargasaurus.jpg\r\n', 1),
(16, 'Mosasaurus', 13000, '2.0', 201, 48, 18, 303, 103, '                https://www.wennoanimal.com/uploads/animals/original/img_mosasaurus.jpg\r\n', 0),
(17, 'Lambeosaurus', 4000, '3.0', 202, 25, 14, 303, 103, '                      https://www.wennoanimal.com/uploads/animals/original/img_lambeosaurus.jpg\r\n', 0),
(18, 'Parasaurolophus', 2500, '3.5', 202, 40, 10, 303, 101, '                      https://www.wennoanimal.com/uploads/animals/original/img_parasaurolophus.jpg\r\n', 0),
(19, 'Asylosaurus', 25, '0.7', 202, 12, 2, 301, 103, '                        https://images.dinosaurpictures.org/Asylosaurus_yalensis_by_karkemish00_9538.jpg\r\n', 0),
(20, 'Isanosaurus', 5500, '2.0', 202, 8, 7, 301, 104, '                              https://images.dinosaurpictures.org/Isanosaurus-Yamamoto-Seiji_0808.jpg\r\n', 0),
(21, 'Mussaurus', 150, '1.0', 202, 9, 3, 301, 101, '                        https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mussaurus_patagonicus_life_restoration.png/1024px-Mussaurus_patagonicus_life_restoration.png\r\n', 0),
(22, 'Melanorosaurus', 1800, '2.5', 202, 6, 8, 301, 105, '                      https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Melanorosaurus_readi_steveoc.jpg/1024px-Melanorosaurus_readi_steveoc.jpg', 0),
(23, 'Plateosaurus', 3000, '2.5', 202, 6, 10, 301, 103, '               https://images.dinosaurpictures.org/Plateosaurus_1_be90.jpg', 0),
(24, 'Unaysaurus', 70, '0.8', 202, 6, 3, 301, 101, '              https://upload.wikimedia.org/wikipedia/commons/a/a6/Unaysaurus.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `period`
--

CREATE TABLE `period` (
  `period_id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `period`
--

INSERT INTO `period` (`period_id`, `name`) VALUES
(301, 'Triassic'),
(302, 'Jurassic'),
(303, 'Cretaceous');

-- --------------------------------------------------------

--
-- Table structure for table `selected_dinosaur`
--

CREATE TABLE `selected_dinosaur` (
  `selected_dinosaur_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `dinosaur_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `selected_dinosaur`
--

INSERT INTO `selected_dinosaur` (`selected_dinosaur_id`, `user_id`, `dinosaur_id`) VALUES
(1, 6, 13),
(2, 1, 1),
(3, 7, 14),
(4, 5, 18);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `lastname`, `date_of_birth`, `email`, `password`, `admin`) VALUES
(1, 'Peter', 'Jhonson', '1986-12-03', 'DavidELeblanc@dayrep.com', 'pughieYie5', 1),
(2, 'Eugene', 'J. Oja', '1972-06-07', 'EugeneJOja@dayrep.com', 'ahs9ieK8', 1),
(3, 'Edelweiss', 'Castro Ramón', '2000-09-17', 'EdelweissCastroRamon@mail.com', 'eeHae3eif', 0),
(4, 'Alethia', 'Escobar Ortega', '2010-08-25', 'AlethiaEscobarOrtega@rhyta.com', 'Ib0fainah9', 0),
(5, 'Bart', 'Márquez Solorio', '2003-10-13', 'BartMarquezSolorio@teleworm.us', 'Grjdk3kdk9', 0),
(6, 'Baudelio', 'Cabán Acevedo', '2002-11-05', 'BaudelioCabanAcevedo@dayrep.com', 'shien1ohY', 0),
(7, 'Felicia', 'Almanza Preciado', '2007-07-07', 'FeliciaAlmanzaPreciado@rhyta.com', 'aid6fo8Si', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `continent`
--
ALTER TABLE `continent`
  ADD PRIMARY KEY (`continent_id`);

--
-- Indexes for table `diet`
--
ALTER TABLE `diet`
  ADD PRIMARY KEY (`diet_id`);

--
-- Indexes for table `dinosaur`
--
ALTER TABLE `dinosaur`
  ADD PRIMARY KEY (`dinosaur_id`),
  ADD KEY `dinosaur_ibfk_3` (`period_id`),
  ADD KEY `dinosaur_ibfk_2` (`continent_id`),
  ADD KEY `diet_id` (`diet_id`);

--
-- Indexes for table `period`
--
ALTER TABLE `period`
  ADD PRIMARY KEY (`period_id`);

--
-- Indexes for table `selected_dinosaur`
--
ALTER TABLE `selected_dinosaur`
  ADD PRIMARY KEY (`selected_dinosaur_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `dinosaur_id` (`dinosaur_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dinosaur`
--
ALTER TABLE `dinosaur`
  MODIFY `dinosaur_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `selected_dinosaur`
--
ALTER TABLE `selected_dinosaur`
  MODIFY `selected_dinosaur_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dinosaur`
--
ALTER TABLE `dinosaur`
  ADD CONSTRAINT `dinosaur_ibfk_2` FOREIGN KEY (`continent_id`) REFERENCES `continent` (`continent_id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  ADD CONSTRAINT `dinosaur_ibfk_3` FOREIGN KEY (`period_id`) REFERENCES `period` (`period_id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  ADD CONSTRAINT `dinosaur_ibfk_4` FOREIGN KEY (`diet_id`) REFERENCES `diet` (`diet_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

--
-- Constraints for table `selected_dinosaur`
--
ALTER TABLE `selected_dinosaur`
  ADD CONSTRAINT `selected_dinosaur_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `selected_dinosaur_ibfk_2` FOREIGN KEY (`dinosaur_id`) REFERENCES `dinosaur` (`dinosaur_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
