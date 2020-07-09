
DROP Database trottTest;

CREATE DATABASE trottTest;

USE trottTest;

CREATE TABLE user( 
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
	`username`  VARCHAR(50) NOT NULL , 
	`password` VARCHAR(60) NOT NULL, 
	`email`  VARCHAR(100) NOT NULL,
	`lastname` VARCHAR(50)  NULL, 
	`firstname` VARCHAR(50)  NULL , 
	`birthday` DATE  NULL, 
	`phone` VARCHAR(20) NULL ,
	`tree` INT NULL ,
	`points` INT NULL,  
	`Km_traveled` INT NULL ); 

INSERT INTO user( username, password , email ) VALUES ('TOTO','$2b$10$Pft5.luOXfdPrkpxSKjCb.kKMz7TOQGu1APSFVrZ/lUsLVdW91o2i', 'testemail@test.com'), ('Test2','$2b$10$UHcjjbngxBeaJZ2Jo9eeOesNJYdXaOPJa1O6RwQOhnzNFIwlSHswK', 'testemail@test.com');
