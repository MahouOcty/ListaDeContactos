-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-11-2022 a las 10:05:03
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `L5N30UvadZ`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `documentNumber` int(11) NOT NULL,
  `documentType` int(11) NOT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastname` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `birthday` date NOT NULL,
  `cellphone` bigint(12) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contacts`
--

INSERT INTO `contacts` (`documentNumber`, `documentType`, `name`, `lastname`, `birthday`, `cellphone`, `phone`, `address`) VALUES
(66841058, 1, 'Luz Angela', 'Saenz Rodriguez', '1970-01-24', 3182545622, NULL, 'Carrera 85c#14a-116');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documenttypes`
--

CREATE TABLE `documenttypes` (
  `idDocumentType` int(11) NOT NULL,
  `documentType` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `documenttypes`
--

INSERT INTO `documenttypes` (`idDocumentType`, `documentType`) VALUES
(1, 'Cedula de Ciudadanía'),
(2, 'Tarjeta de Identidad'),
(3, 'Cedula de Extrangería'),
(4, 'Pasaporte');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`documentNumber`),
  ADD UNIQUE KEY `documentNumber_UNIQUE` (`documentNumber`),
  ADD KEY `Contact_idx` (`documentType`);

--
-- Indices de la tabla `documenttypes`
--
ALTER TABLE `documenttypes`
  ADD PRIMARY KEY (`idDocumentType`),
  ADD UNIQUE KEY `idDocumentType_UNIQUE` (`idDocumentType`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `documenttypes`
--
ALTER TABLE `documenttypes`
  MODIFY `idDocumentType` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `Contact` FOREIGN KEY (`documentType`) REFERENCES `documenttypes` (`iddocumenttype`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
