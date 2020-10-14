module.exports = `

-- Drop tables if they exist

DROP TABLE IF EXISTS assaults;


-- (Re)create tables

CREATE TABLE assaults (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date VARCHAR(50) not null,
    time VARCHAR(50) not null,
    place VARCHAR(250) NOT NULL,
    description varchar(250)
);

-- Add some data into table

INSERT INTO assaults
    (date, time, place, description)
VALUES
    ('2020-10-13', "15:26", "Waterloo", "tall, brown hair"), -- ID = 1
    ('2020-10-10', "18:30", "Big Ben", "slim, wearing a yellow raincoat"), -- ID = 2
    ('2020-10-5', "19:30", "Big Ben", "fat, wearing black shoes"), -- ID = 3
    ('2020-10-5', "11:10", "Waterloo", "shaved head, tattoos"), -- ID = 4
    ('2020-10-6', "00:00", "Hyde Park", "long hair, was wearing jeans"), -- ID = 5
    ('2020-10-7', "23:30", "Hyde Park", "it was a man, he looked around 40 years old"), -- ID = 6
    ('2020-10-9', "03:00", "Kensigton", "had a deep voice and looked old"), -- ID = 7
    ('2020-10-8', "12:00", "Kensigton", "I couldn't see how they looked. Asked me for money and then tried to grab me"), -- ID = 8
    ('2020-10-11', "22:00", "Glasgow Str.", "Blonde, was wearing a black jacket"), -- ID = 9
    ('2020-10-12', "22:05", "Glasgow Str.", "Blonde, tall, looked like 30 years old") -- ID = 10
;

-- Query the data

SELECT * FROM assaults;

SELECT * FROM assaults WHERE date = ${date};

