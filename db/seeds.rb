# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Photo.destroy_all

demouser = User.create({username: "demouser", email: "demo@demo.com", password: "password"})

seeduser1 = User.create({username: "user1", email: "user1@user.com", password: "password"})
seeduser2 = User.create({username: "user2", email: "user2@user.com", password: "password"})
seeduser3 = User.create({username: "user3", email: "user3@user.com", password: "password"})
seeduser4 = User.create({username: "user4", email: "user4@user.com", password: "password"})

photo1 = Photo.create({title: "photo1", description: "photo1 des", uploader_id: seeduser1.id})
photo2 = Photo.create({title: "photo2", description: "photo2 des", uploader_id: seeduser1.id})
photo3 = Photo.create({title: "photo3", description: "photo3 des", uploader_id: seeduser1.id})
photo4 = Photo.create({title: "photo4", description: "photo4 des", uploader_id: seeduser1.id})
photo5 = Photo.create({title: "photo5", description: "photo5 des", uploader_id: seeduser1.id})
photo6 = Photo.create({title: "photo6", description: "photo6 des", uploader_id: seeduser2.id})
photo7 = Photo.create({title: "photo7", description: "photo7 des", uploader_id: seeduser2.id})
photo8 = Photo.create({title: "photo8", description: "photo8 des", uploader_id: seeduser2.id})
photo9 = Photo.create({title: "photo9", description: "photo9 des", uploader_id: seeduser2.id})
photo10 = Photo.create({title: "photo10", description: "photo10 des", uploader_id: seeduser2.id})


