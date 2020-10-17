module.exports = `
-- Drop table if it exists
DROP TABLE IF EXISTS assaults;

-- (Re)create table
CREATE TABLE assaults (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    location VARCHAR(500) NOT NULL,
    description VARCHAR(500) DEFAULT '',
    lat DECIMAL(11,8) NOT NULL,
    lng DECIMAL(11,8) NOT NULL
);

-- Add some test data

INSERT INTO assaults
    (date_time, location, description, lat, lng)
VALUES
    ('2020-10-13 15:26', "Waterloo", "tall, brown hair", 1.23, 2.34), -- ID = 1
    ('2020-10-10 18:30', "Big Ben", "slim, wearing a yellow raincoat", 1.23, 2.34), -- ID = 2
    ('2020-10-05 19:30', "Big Ben", "fat, wearing black shoes", 1.23, 2.34), -- ID = 3
    ('2020-10-05 11:10', "Waterloo", "shaved head, tattoos", 1.23, 2.34), -- ID = 4
    ('2020-10-06 00:00', "Hyde Park", "long hair, was wearing jeans", 1.23, 2.34), -- ID = 5
    ('2020-10-07 23:30', "Hyde Park", "it was a man, he looked around 40 years old", 1.23, 2.34), -- ID = 6
    ('2020-10-09 3:00', "Kensigton", "had a deep voice and looked old", 1.23, 2.34), -- ID = 7
    ('2020-10-08 12:00', "Kensigton", "I couldn't see how they looked. Asked me for money and then tried to grab me", 1.23, 2.34), -- ID = 8
    ('2020-10-11 2:00', "Glasgow Str.", "Blonde, was wearing a black jacket", 1.23, 2.34), -- ID = 9
    ('2020-10-12 22:05', "Glasgow Str.", "Blonde, tall, looked like 30 years old", 1.23, 2.34) -- ID = 10
;
`;
