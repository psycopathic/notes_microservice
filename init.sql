--Initialize separate database for each microservice
-- This script runs when PostgresSQL container starts for the first time

-- Create database for each service

CREATE DATABASE auth_service;
CREATE DATABASE user_service;
CREATE DATABASE notes_service;
CREATE DATABASE tags_service;



-- Grant permission to the user COMMENT
GRANT ALL PRIVILEGES ON DATABASE auth_service TO notes;
GRANT ALL PRIVILEGES ON DATABASE user_service TO notes;
GRANT ALL PRIVILEGES ON DATABASE notes_service TO notes;
GRANT ALL PRIVILEGES ON DATABASE tags_service TO notes;