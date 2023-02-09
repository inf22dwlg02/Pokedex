
--
-- Base de datos: `pokemon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bag`
--

CREATE DATABASE `pokemon` CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `pokemon`;

DROP TABLE IF EXISTS `bag`;
CREATE TABLE IF NOT EXISTS `bag` (
  `id` int(11) NOT NULL,
  `bagid` int(11) NOT NULL,
  `berry` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Volcado de datos para la tabla `bag`
--

INSERT INTO `bag` (`id`, `bagid`, `berry`) VALUES
(0, 0, 'Zydra'),
(2, 0, 'Aranja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `berries`
--

DROP TABLE IF EXISTS `berries`;
CREATE TABLE IF NOT EXISTS `berries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_id` varchar(255) DEFAULT NULL,
  `ability` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name_id` (`name_id`)
)AUTO_INCREMENT=4;

--
-- Volcado de datos para la tabla `berries`
--

INSERT INTO `berries` (`id`, `name_id`, `ability`) VALUES
(1, 'Aranja', 'Heal'),
(2, 'Caquic', 'Poison'),
(3, 'Zydra', 'Paralisis');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
CREATE TABLE IF NOT EXISTS `pokemons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `region_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id` (`region_id`)
);

--
-- Volcado de datos para la tabla `pokemons`
--

INSERT INTO `pokemons` (`id`, `name`, `estado`, `region_id`) VALUES
(0, 'Bulbasaur', 'Crazy', 'Kanto'),
(1, 'Ivisaur', 'Sad', 'Hoenn'),
(2, 'Venusaur', 'Poisoned', 'Hoenn'),
(4, 'Charmander', 'Happy', 'Shinnoh'),
(5, 'Charmeleon', 'Sleepy', 'Shinnoh'),
(6, 'Charizard', 'Angry', 'Shinnoh'),
(7, 'Squirtle', 'Quiet', 'Teselia'),
(8, 'Wartortle', 'Resting', 'Teselia'),
(9, 'Blastoise', 'Wet', 'Teselia'),
(10, 'Porygon', 'Neutral', 'Shinnoh'),
(11, 'Caterpie', 'Lazy', 'Hoenn'),
(12, 'Metapod', 'Strong', 'Hoenn'),
(13, 'Butterfre', 'Happy', 'Hoenn'),
(14, 'Weedle', 'Lazy', 'Teselia'),
(15, 'Kakuna', 'Strong', 'Teselia'),
(16, 'Beedrill', 'Angry', 'Shinnoh'),
(17, 'Pidgey', 'Timid', 'Kanto'),
(18, 'Pidgeotto', 'Relaxed', 'Kanto'),
(19, 'Pidgeot', 'Serious', 'Shinnoh'),
(20, 'Rattata', 'Mild', 'Shinnoh'),
(21, 'Raticate', 'Lonely', 'Kanto'),
(22, 'Spearow', 'Timid', 'Shinnoh'),
(23, 'Fearow', 'Brave', 'Hoenn'),
(24, 'Ekans', 'Bold', 'Kanto'),
(25, 'Arbok', 'Bold', 'Kanto'),
(26, 'Pikachu', 'Naive', 'Teselia'),
(27, 'Raichu', 'Sassy', 'Teselia'),
(28, 'Sandshrew', 'Impish', 'Hoenn'),
(29, 'Sandslash', 'Serious', 'Hoenn'),
(30, 'Arceus', 'Adamant', 'Kanto');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regions`
--

DROP TABLE IF EXISTS `regions`;
CREATE TABLE IF NOT EXISTS `regions` (
  `name` varchar(255) NOT NULL,
  `cardinal_point` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`name`)
);

--
-- Volcado de datos para la tabla `regions`
--

INSERT INTO `regions` (`name`, `cardinal_point`) VALUES
('Hoenn', 'North'),
('Shinnoh', 'West'),
('Kanto', 'South'),
('Teselia', 'East');
COMMIT;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';