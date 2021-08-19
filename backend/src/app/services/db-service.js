const mysql= require('mysql2');

const connection2=mysql.createConnection({
    host:'localhost',
    password:'olehdno200799',
    user:'root'  
}).promise(); 
connection2.execute("CREATE DATABASE touristAgency")
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
 
            const connection=mysql.createConnection({
                host:'localhost',
                password:'olehdno200799',
                user:'root',
                database:'touristagency'
                
            }).promise(); 
            

connection.execute(`create table if not exists country(
    name char(30) not null primary key,
    travelStatus boolean not null,
    toursCount int not null)`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
 
connection.execute(`create table if not exists cities(
    name char(15) not null primary key,
    CountryName char(30),
    foreign key (CountryName) references country(name))`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

connection.execute(`create table if not exists hotels(
    hotelName char(15) not null primary key,
    City char(15),
    CountryName char(30),
    foreign key (CountryName) references country(name),
    foreign key (City) references cities(name),
    startDate date not null,
    endDate date not null,
    SlotsCount int not null)`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

connection.execute(`create table if not exists flights(
    companyName char(30) not null,
    route char(30) not null primary key,
    SlotsCount int not null,
    FlightDate date not null )`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

connection.execute(`insert into country (name,travelStatus,toursCount)
            values
            ('Італія',1,3),
            ('Єгипет',0,2),
            ('Туреччина',1,4),
            ('Іспанія',0,1),
            ('Греція',1,2),
            ('Франція',1,3),
            ('Грузія',1,2),
            ('Таїланд',0,2),
            ('США',1,5),
            ('Кіпр',0,0),
            ('Австрія',1,2),
            ('Чехія',1,1)`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

connection.execute(`insert into cities (name,countryName)
            values
            ('Рим','Італія'),
            ('Венеція','Італія'),
            ('Анталія','Туреччина'),
            ('Стамбул','Туреччина'),
            ('Барселона','Іспанія'),
            ('Афіни','Греція'),
            ('Хургада','Єгипет'),
            ('Ніцца','Франція'),
            ('Париж','Франція'),
            ('Тбілісі','Грузія'),
            ('Кутаїсі','Грузія'),
            ('Бангкок','Таїланд'),
            ('Ларнака','Кіпр'),
            ('Відень','Австрія'),
            ('Салоніки','Греція'),
            ('Прага','Чехія'),
            ('Нью-Йорк','США'),
            ('Маямі','США'),
            ('Лас-Вегас','США')`)
    .then(res=>console.log(res)) 
    .catch(err=>console.log(err));

connection.execute(`insert into hotels (hotelName,City,CountryName,startDate,endDate,SlotsCount)
            values
            ('Hotel0','Рим','Італія','2021-08-18','2021-08-22',12),
            ('Hotel1','Венеція','Італія','2021-08-23','2021-08-30',6),
            ('Hotel2','Анталія','Туреччина','2021-08-21','2021-08-25',5),
            ('Hotel3','Барселона','Іспанія','2021-08-22','2021-08-22',11),
            ('Hotel4','Афіни','Греція','2021-08-20','2021-08-24',8),
            ('Hotel5','Хургада','Єгипет','2021-08-21','2021-08-29',0),
            ('Hotel6','Ніцца','Франція','2021-08-22','2021-08-29',4),
            ('Hotel7','Париж','Франція','2021-08-23','2021-08-29',7),
            ('Hotel8','Тбілісі','Грузія','2021-08-22','2021-08-29',2),
            ('Hotel9','Кутаїсі','Грузія','2021-08-21','2021-08-29',9),
            ('Hotel10','Бангкок','Таїланд','2021-08-20','2021-08-29',4),
            ('Hotel11','Ларнака','Кіпр','2021-08-24','2021-08-29',3),
            ('Hotel12','Відень','Австрія','2021-08-25','2021-08-29',6),
            ('Hotel13','Салоніки','Греція','2021-08-23','2021-08-29',12),
            ('Hotel14','Прага','Чехія','2021-08-22','2021-08-29',8),
            ('Hotel16','Нью-Йорк','США','2021-08-21','2021-08-29',6),
            ('Hotel17','Маямі','США','2021-08-23','2021-08-29',4),
            ('Hotel18','Лас-Вегас','США','2021-08-24','2021-08-29',5),
            ('Hotel19','Стамбул','Туреччина','2021-08-22','2021-08-29',7),
            ('Hotel20','Нью-Йорк','США','2021-08-20','2021-08-29',3)`)  
            .then(res=>console.log(res))
            .catch(err=>console.log(err));    

connection.execute(`insert into flights (companyName,route,SlotsCount,FlightDate)
            values
            ('МАУ','Рим-Київ',7,'2021-08-19'),
            ('Turkish Airlanes','Афіни-Львів',21,'2021-08-20'),
            ('МАУ','Барселона-Київ',0,'2021-08-21'),
            ('British Airlanes','Венеція-Львів',6,'2021-08-22'),
            ('МАУ','Афіни-Київ',12,'2021-08-23'),
            ('Turkish Airlanes','Барселона-Львів',5,'2021-08-24'),
            ('МАУ','Ніцца-Київ',7,'2021-08-25'),
            ('МАУ','Париж-Київ',8,'2021-08-26'),
            ('Turkish Airlanes','Тбілісі-Львів',6,'2021-08-27'),
            ('Turkish Airlanes','Кутаїсі-Київ',9,'2021-08-29'),
            ('British Airlanes','Бангкок-Київ',3,'2021-08-21'),
            ('British Airlanes','Нью-Йорк-Київ',4,'2021-08-22'),
            ('British Airlanes','Маямі-Київ',5,'2021-08-23'),
            ('British Airlanes','Лас-Вегас-Київ',6,'2021-08-24'),
            ('Turkish Airlanes','Стамбул-Львів',7,'2021-08-25'),
            ('Turkish Airlanes','Стамбул-Київ',8,'2021-08-26'),
            ('МАУ','Відень-Київ',9,'2021-08-27'),
            ('МАУ','Прага-Львів',10,'2021-08-28'),
            ('Turkish Airlanes','Саланіки-Київ',4,'2021-08-29'),
            ('Turkish Airlanes','Анталія-Київ',8,'2021-08-20')`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));   
        