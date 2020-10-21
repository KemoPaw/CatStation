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
photo11 = Photo.create({title: "photo11", description: "photo11 des", uploader_id: seeduser3.id})
photo12 = Photo.create({title: "photo12", description: "photo12 des", uploader_id: seeduser3.id})
photo13 = Photo.create({title: "photo13", description: "photo13 des", uploader_id: seeduser3.id})
photo14 = Photo.create({title: "photo14", description: "photo14 des", uploader_id: seeduser3.id})
photo15 = Photo.create({title: "photo15", description: "photo15 des", uploader_id: seeduser3.id})
photo16 = Photo.create({title: "photo16", description: "photo16 des", uploader_id: seeduser4.id})
photo17 = Photo.create({title: "photo17", description: "photo17 des", uploader_id: seeduser4.id})
photo18 = Photo.create({title: "photo18", description: "photo18 des", uploader_id: seeduser4.id})
photo19 = Photo.create({title: "photo19", description: "photo19 des", uploader_id: seeduser4.id})
photo20 = Photo.create({title: "photo20", description: "photo20 des", uploader_id: seeduser4.id})


photo1.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-1.jpg'), filename: 'cat1-1.jpg')
photo2.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-2.jpg'), filename: 'cat1-2.jpg')
photo3.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-3.jpg'), filename: 'cat1-3.jpg')
photo4.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-4.jpg'), filename: 'cat1-4.jpg')
photo5.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-5.jpg'), filename: 'cat1-5.jpg')
photo6.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-6.jpg'), filename: 'cat1-6.jpg')
photo7.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-7.jpg'), filename: 'cat1-7.jpg')
photo8.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-8.jpg'), filename: 'cat1-8.jpg')
photo9.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-9.jpg'), filename: 'cat1-9.jpg')
photo10.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-10.jpg'), filename: 'cat1-10.jpg')
photo11.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-11.jpg'), filename: 'cat1-11.jpg')
photo12.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-12.jpg'), filename: 'cat1-12.jpg')
photo13.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-13.jpg'), filename: 'cat1-13.jpg')
photo14.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-14.jpg'), filename: 'cat1-14.jpg')
photo15.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-15.jpg'), filename: 'cat1-15.jpg')
photo16.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-16.jpg'), filename: 'cat1-16.jpg')
photo17.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-17.jpg'), filename: 'cat1-17.jpg')
photo18.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-18.jpg'), filename: 'cat1-18.jpg')
photo19.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-19.jpg'), filename: 'cat1-19.jpg')
photo20.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-20.jpg'), filename: 'cat1-20.jpg')






