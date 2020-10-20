module.exports = `
-- Drop table(s) if applicable
DROP TABLE IF EXISTS assaults;
DROP TABLE IF EXISTS users;

-- (Re)create table(s)
CREATE TABLE assaults (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    location VARCHAR(500) NOT NULL,
    description VARCHAR(500) DEFAULT '',
    lat DECIMAL(11,8) NOT NULL,
    lng DECIMAL(11,8) NOT NULL
);

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    lat DECIMAL(11,8) NOT NULL,
    lng DECIMAL(11,8) NOT NULL
);

-- Add some test data

INSERT INTO assaults
    (date_time, location, description, lat, lng)
VALUES
    ('2020-10-13 15:26', "Waterloo", "tall, brown hair", 51.500563, -0.116291), -- ID = 1
    ('2020-10-10 18:30', "Big Ben", "slim, wearing a yellow raincoat", 51.500889, -0.124647), -- ID = 2
    ('2020-10-05 19:30', "Liverpool Street", "fat, wearing black shoes", 51.517557, -0.082714), -- ID = 3
    ('2020-10-05 2:15', "Peckham Rye", "shaved head, tattoos", 51.458493, -0.061929), -- ID = 4
    ('2020-10-06 00:00', "Finsbury Park", "long hair, was wearing jeans", 51.569838, -0.101444), -- ID = 5
    ('2020-10-07 23:30', "Hyde Park", "it was a man, he looked around 40 years old", 51.504720, -0.157216), -- ID = 6
    ('2020-10-09 3:00', "Camberwell Green", "had a deep voice and looked old", 51.475110, -0.092126), -- ID = 7
    ('2020-10-08 12:00', "Oval Station", "I couldn't see how they looked. Asked me for money and then tried to grab me", 51.481148, -0.111895), -- ID = 8
    ('2020-10-11 2:00', "Lewisham", "Blonde, was wearing a black jacket", 51.466426, -0.016372), -- ID = 9
    ('2020-10-12 22:05', "Sydenham Hill", "Blonde, tall, looked like 30 years old", 51.433557, -0.068610) -- ID = 10
;

INSERT INTO users
    (user_name, user_email, lat, lng)
VALUES
    ('Mary', 'user1@acme.com', 2.345, 2.100),
    ('Joan', 'user2@acme.com', 4.345, 10.100),
    ('John', 'user3@acme.com', 2.345, 2.170),
    ('Lucy', 'user4@acme.com', 50.345, 2.100);
`;
