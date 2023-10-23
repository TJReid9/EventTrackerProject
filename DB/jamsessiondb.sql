-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema jamsessiondb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `jamsessiondb` ;

-- -----------------------------------------------------
-- Schema jamsessiondb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jamsessiondb` DEFAULT CHARACTER SET utf8 ;
USE `jamsessiondb` ;

-- -----------------------------------------------------
-- Table `jam_session`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jam_session` ;

CREATE TABLE IF NOT EXISTS `jam_session` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `create_date` DATETIME NULL,
  `last_update` DATETIME NULL,
  `start_date` DATE NULL,
  `finish_date` DATE NULL,
  `song_link` VARCHAR(2000) NULL,
  `site_link` TEXT NULL,
  `gear` TEXT NULL,
  `bpm` INT NULL,
  `description` TEXT NULL,
  `img_url` VARCHAR(4000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS jamsession@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'jamsession'@'localhost' IDENTIFIED BY 'jamsession';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'jamsession'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `jam_session`
-- -----------------------------------------------------
START TRANSACTION;
USE `jamsessiondb`;
INSERT INTO `jam_session` (`id`, `title`, `create_date`, `last_update`, `start_date`, `finish_date`, `song_link`, `site_link`, `gear`, `bpm`, `description`, `img_url`) VALUES (1, 'At Ease', NULL, NULL, '2023-09-06', '2023-09-24', 'AtEase.mp3', '', 'Ableton Live, Guitar, Keys, Bass, Harmonica', 110, NULL, NULL);
INSERT INTO `jam_session` (`id`, `title`, `create_date`, `last_update`, `start_date`, `finish_date`, `song_link`, `site_link`, `gear`, `bpm`, `description`, `img_url`) VALUES (2, 'Boogie Monsta', NULL, NULL, '2023-07-07', '2023-08-03', 'BoogieMonsta.mp3', NULL, 'Ableton Live, Bass, Organ, Guitar', 120, NULL, NULL);
INSERT INTO `jam_session` (`id`, `title`, `create_date`, `last_update`, `start_date`, `finish_date`, `song_link`, `site_link`, `gear`, `bpm`, `description`, `img_url`) VALUES (3, 'Fallout', NULL, NULL, '2023-08-08', '2023-09-05', 'Fallout.mp3', NULL, 'Ableton Live, Guitar, Synth, Keys', 100, NULL, NULL);
INSERT INTO `jam_session` (`id`, `title`, `create_date`, `last_update`, `start_date`, `finish_date`, `song_link`, `site_link`, `gear`, `bpm`, `description`, `img_url`) VALUES (4, 'Open Wide', NULL, NULL, '2023-09-07', '2023-09-22', 'OpenWide.mp3', NULL, 'Ableton Live, Guitar, Keys', 112, NULL, NULL);
INSERT INTO `jam_session` (`id`, `title`, `create_date`, `last_update`, `start_date`, `finish_date`, `song_link`, `site_link`, `gear`, `bpm`, `description`, `img_url`) VALUES (5, 'Feeling', NULL, NULL, '2023-09-24', '2023-10-18', 'Feeling.mp3', NULL, 'Ableton Live, Guitar Keys, Synth', 95, NULL, NULL);

COMMIT;

