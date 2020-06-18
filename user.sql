//création de la base de données User
CREATE DATABASE trottTest;
CREATE TABLE user( ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT , `lastname` VARCHAR(50) NOT NULL, `firstname` VARCHAR(50) NOT NULL , `birthday` DATE NOT NULL, `email`  VARCHAR(100) NOT NULL, `phone` VARCHAR(20) NOT NULL ,`tree` INT NULL , `Km_traveled` INT NULL ); 


// Création de données exemples pour le tableau User
INSERT INTO user( lastname, firstname, birthday, phone , email ) VALUES ('Do_Brazil','Toto', '1990-11-05','0326487948', 'testemail@test.com'), ('De_Chalons','Malok',  '1985-05-08','03.45.96.94.84', 'testemail@malok.com');

