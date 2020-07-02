//création de la base de données User

DROP Database trottTest;

CREATE DATABASE trottTest;

USE trottTest;

CREATE TABLE user( 
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
	`username`  VARCHAR(50) NOT NULL , 
	`password` VARBINARY(160) NOT NULL, 
	`email`  VARCHAR(100) NOT NULL,
	`lastname` VARCHAR(50)  NULL, 
	`firstname` VARCHAR(50)  NULL , 
	`birthday` DATE  NULL, 
	`phone` VARCHAR(20) NULL ,
	`tree` INT NULL ,
	`points` INT NULL,  
	`Km_traveled` INT NULL ); 

// Création de données exemples pour le tableau User
INSERT INTO user( username, password , email ) VALUES ('TOTO','totoPassword', 'testemail@test.com'), ('Test2','TestPassWord', 'testemail@test.com');



