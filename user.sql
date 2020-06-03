//création de la base de données User
create DATABASE Trott;
create TABLE User ( ID INT NOT NULL PRIMARY KEY auto_increment , `lastname` VARCHAR(50) NOT NULL, `firstname` VARCHAR(50) NOT NULL , `birthday` DATE not null, `email`  VARCHAR(100) NOT NULL, `phone` VARCHAR(20) NOT NULL ,`tree` INT NULL , `Km traveled` INT NULL ); 


// Création de données exemples pour le tableau User
insert into User( lastname, firstname, birthday, phone , email ) VALUES ('Do Brazil','Toto', '1990-11-05','0326487948', 'testemail@test.com'), ('De Chalons','Malok',  '1985-05-08','03.45.96.94.84', 'testemail@malok.com');

