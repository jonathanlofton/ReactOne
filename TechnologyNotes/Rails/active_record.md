# Active Record

# Models 
  - responsible for Business Logic, associations, validations and other things

# Controller 
  - responsible for handling HTTP requests and providing an appropiate response

# View 
  - some way to represent the data in a renderable format

## N + 1 Queries

  is doing additional sql queries when one is not needed, so a one-to-many relationship would produce a N + 1 query if you had to do a SELECT * FROM Cars, then did another SELECT * FROM wheels WHERE car.id = id