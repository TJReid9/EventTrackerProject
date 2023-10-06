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
  `session_date` DATE NULL,
  `start_time` TIME NULL,
  `end_time` TIME NULL,
  `location` VARCHAR(100) NULL,
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
INSERT INTO `jam_session` (`id`, `title`, `create_date`, `last_update`, `session_date`, `start_time`, `end_time`, `location`) VALUES (1, 'Jam at The Alley', NULL, NULL, '2023-10-06', '18:30', '20:00', 'Littleton, CO');

COMMIT;

