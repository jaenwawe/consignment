# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Advanced State Updates: Arrays
These are some common strategies for updating arrays in state without mutating the original array.

adding an item: use spread operator - setItems([...items, newItem])
removing an item: use filter - setItems(items.filter(i => i.id !== id))
updating an item: use map - setItems(items.map(i => i.id === newItem.id ? newItem : item))