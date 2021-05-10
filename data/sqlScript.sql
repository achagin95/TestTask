DROP DATABASE IF EXISTS testTaskSmartForce;
CREATE DATABASE `testTaskSmartForce`; 
USE `testTaskSmartForce`;

CREATE TABLE houses (
id INT (11) NOT NULL auto_increment,
product varchar(45) NOT NULL,
address varchar(45) not null,
PRIMARY KEY (id),
unique key address (address)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

create user "testUser"@"%" identified by "test";
select User,Host from mysql.user;
grant all privileges on testTaskSmartForce.* to 'testUser'@'%';

show grants for 'testUser'@'%';
flush privileges;

show tables;
select * from houses;
insert into houses ( product, address) values ("dom3", "24 street");