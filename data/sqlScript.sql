DROP DATABASE IF EXISTS testTaskSmartForce;
CREATE DATABASE `testTaskSmartForce`; 
USE `testTaskSmartForce`;

CREATE TABLE houses (
id INT (11) NOT NULL auto_increment,
product varchar(45) NOT NULL,
addressStreet varchar(45) not null,
addressCity varchar(45) not null,
addressState varchar(45) not null,
addressZip varchar(45) not null,
addressCoorLatitude varchar(45) not null,
addressCoorLongitude varchar(45) not null,
builder varchar(45) not null,
price int(11) not null,
phone varchar(45) not null,
square int(11) not null,
hasBasement boolean,
description varchar(45) not null,
garage int(11) not null,
bedrooms int(11) not null,
type varchar(45) not null,
/*amenities boolean,
images*/
PRIMARY KEY (id),
unique key addressStreet (addressStreet)
) ENGINE=INNODB DEFAULT CHARSET=utf8;
/*учесть что тайп подсветился, возможно придется заменить
еще поправить уникальный ключ позже*/
create user "testUser"@"%" identified by "test";
select User,Host from mysql.user;
grant all privileges on testTaskSmartForce.* to 'testUser'@'%';

show grants for 'testUser'@'%';
flush privileges;

show tables;
select * from houses;
insert into houses ( product, address) values ("dom3", "20 street");