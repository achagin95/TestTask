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
description varchar(45) not null,
garage int not null,
bedrooms int not null,
type varchar(45) not null,
/*amenities,
images*/
PRIMARY KEY (id),
unique key addressStreet (addressStreet)
) ENGINE=INNODB DEFAULT CHARSET=utf8;
/*учесть что тайп подсветился, возможно придется заменить
еще поправить уникальный ключ позже*/

create table amenities (
id int not null auto_increment,
amenitiesName varchar(45) not null,
houseId int not null,
primary key (id),
unique key amenitiesName (amenitiesName),
foreign key (houseId) references houses (id) on delete cascade
)ENGINE=INNODB DEFAULT CHARSET=utf8;

create table images (
id int not null auto_increment,
imageUrl varchar(255) not null,
houseId int not null,
primary key (id),
unique key imageUrl (imageUrl),
foreign key (houseId) references houses (id) on delete cascade
)ENGINE=INNODB DEFAULT CHARSET=utf8;

create user "testUser"@"%" identified by "test";
select User,Host from mysql.user;
grant all privileges on testTaskSmartForce.* to 'testUser'@'%';

show grants for 'testUser'@'%';
flush privileges;

show tables;
select * from houses;
select * from amenities;
select * from images;
insert into houses ( product, address) values ("dom3", "20 street");
