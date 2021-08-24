create database Profe;
use Profe;

create table personas(
ID bigint(20) unsigned NOT NULL auto_increment,
username varchar(50) not null ,
email varchar(100) not null ,
url varchar(100) not null,
primary key (ID)
)engine=MyISAM default charset = utf8 auto_increment=3;

insert into personas (ID,username,email,url) values
(1, 'Pedro', 'thisismy@email.com','https//miblog.name'),
(2, 'Juan', 'elcorreode@juan.com', 'http://www.misitio.com'),
(3, 'Ana', 'escribea@ana.com', 'http://lawebdeana.com');

select * from personas;