DROP DATABASE IF EXISTS testTaskSmartForce;
CREATE DATABASE `testTaskSmartForce`; 
USE `testTaskSmartForce`;

CREATE TABLE houses (
id INT NOT NULL auto_increment,
product VARCHAR(45) NOT NULL,
addressStreet varchar(45) not null,
addressCity varchar(45) not null,
addressState varchar(45) not null,
addressZip varchar(45) not null,
addressCoorLatitude varchar(45) not null,
addressCoorLongitude varchar(45) not null,
builder varchar(45) not null,
price int not null,
phone varchar(45) not null,
square int not null,
hasBasement boolean,
description varchar(8000) not null,
garage int not null,
bedrooms int not null,
type varchar(45) not null,
PRIMARY KEY (id),
unique key addressStreet (addressStreet)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

create table amenities (
id int not null auto_increment,
amenitiesName varchar(45) not null,
houseId int not null,
primary key (id),
foreign key (houseId) references houses (id) on delete cascade
)ENGINE=INNODB DEFAULT CHARSET=utf8;

create table images (
id int not null auto_increment,
imageUrl varchar(255) not null,
houseId int not null,
primary key (id),
foreign key (houseId) references houses (id) on delete cascade
)ENGINE=INNODB DEFAULT CHARSET=utf8;

create user "testUser"@"%" identified by "test";

grant all privileges on testTaskSmartForce.* to 'testUser'@'%';

flush privileges;

