module.exports = `
-- Drop tables if they exist

DROP TABLE IF EXISTS assaults;


-- (Re)create tables

CREATE TABLE assaults (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date VARCHAR(50) not null,
    time VARCHAR(50) not null,
    description varchar(50)
);`
