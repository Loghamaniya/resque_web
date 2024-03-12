 create table report(r_id int auto_increment,r_pic longblob,r_acctype varchar(20),r_accno varchar(10),r_landmark varchar(20),r_comment varchar(500),primary key(r_id));


create table user(u_id int auto_increment,u_name varchar(100),u_dept varchar(100),u_password varchar(50),primary key(u_id));

 insert into user(u_name,u_dept,u_password) values("alagapuram","police","alagapuram");

 insert into user(u_name,u_dept,u_password) values("shevapet","police","shevapet");
 insert into user(u_name,u_dept,u_password) values("busStand","police","busStand");
 insert into user(u_name,u_dept,u_password) values("fiveRoads","hospital","fiveRoads");

alter table report add column police varchar(10);
alter table report add column fire varchar(10);
alter table report add column hospital varchar(10);
alter table report add column r_lat float(20);
alter table report add column  r_long float(20);
alter table report add column  r_nearestPolice char(20);
alter table report add column  r_nearestHosp char(20);

alter table report add column (r_time datetime default CURRENT_TIMESTAMP);