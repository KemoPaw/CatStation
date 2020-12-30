# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Photo.destroy_all

demouser = User.create({username: "DemoUser", email: "demo@demo.com", password: "password"})

seeduser1 = User.create({username: "RoseyGold", email: "user1@user.com", password: "password"})
seeduser2 = User.create({username: "Violette", email: "user2@user.com", password: "password"})
seeduser3 = User.create({username: "Yellow_Sunflowers", email: "user3@user.com", password: "password"})
seeduser4 = User.create({username: "WinterRose", email: "user4@user.com", password: "password"})
seeduser5 = User.create({username: "PinkAzaleaz", email: "user5@user.com", password: "password"})
seeduser6 = User.create({username: "Sakurae", email: "user6@user.com", password: "password"})


photo1 = Photo.create({title: "A Special Photo of Ginger!", description: "Ginger is a sweetheart and is a cuddle bug!", uploader_id: demouser.id})
photo2 = Photo.create({title: "Bloo", description: "photo2 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: demouser.id})
photo3 = Photo.create({title: "Razzy being a Charmer", description: "photo3 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: demouser.id})
photo4 = Photo.create({title: "Cheeto Upclose", description: "photo4 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: demouser.id})
photo5 = Photo.create({title: "Tofu being in his element", description: "photo5 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: demouser.id})
photo6 = Photo.create({title: "Stray kitty in Italy", description: "photo6 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo7 = Photo.create({title: "Princess in a daze", description: "photo7 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo8 = Photo.create({title: "Chedder in a huge Daze", description: "photo8 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo9 = Photo.create({title: "Mimi as a Kitten", description: "photo9 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo10 = Photo.create({title: "Saph looking surprised", description: "photo10 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo11 = Photo.create({title: "Boots being Boots", description: "photo11 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo12 = Photo.create({title: "Kitten that I'm fostering", description: "photo12 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo13 = Photo.create({title: "Plaid taking a Nap", description: "photo13 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo14 = Photo.create({title: "Winter doing a Stretch", description: "photo14 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo15 = Photo.create({title: "Winter's quiet stare", description: "photo15 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo16 = Photo.create({title: "Mochi with his jade eyes", description: "photo16 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo17 = Photo.create({title: "Grey fur with Mint eyes", description: "photo17 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser1.id})
photo18 = Photo.create({title: "Nap time!", description: "photo18 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo19 = Photo.create({title: "Trias as a kitten", description: "photo19 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})
photo20 = Photo.create({title: "photo20", description: "photo20 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})

photo21 = Photo.create({title: "photo11", description: "photo11 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser3.id})
photo22 = Photo.create({title: "photo12", description: "photo12 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser3.id})
photo23 = Photo.create({title: "photo13", description: "photo13 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser3.id})
photo24 = Photo.create({title: "photo14", description: "photo14 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser3.id})
photo25 = Photo.create({title: "photo15", description: "photo15 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser3.id})
photo26 = Photo.create({title: "photo16", description: "photo16 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo27 = Photo.create({title: "photo17", description: "photo17 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo28 = Photo.create({title: "photo18", description: "photo18 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo29 = Photo.create({title: "photo19", description: "photo19 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo30 = Photo.create({title: "photo10", description: "photo10 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser2.id})


photo31 = Photo.create({title: "photo11", description: "photo11 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser6.id})
photo32 = Photo.create({title: "photo12", description: "photo12 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser6.id})
photo33 = Photo.create({title: "photo13", description: "photo13 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser6.id})
photo34 = Photo.create({title: "photo14", description: "photo14 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser6.id})
photo35 = Photo.create({title: "photo15", description: "photo15 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser6.id})
photo36 = Photo.create({title: "photo16", description: "photo16 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo37 = Photo.create({title: "photo17", description: "photo17 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo38 = Photo.create({title: "photo18", description: "photo18 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo39 = Photo.create({title: "photo19", description: "photo19 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})

photo40 = Photo.create({title: "photo19", description: "photo19 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo41 = Photo.create({title: "photo11", description: "photo11 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})
photo42 = Photo.create({title: "photo12", description: "photo12 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})
photo43 = Photo.create({title: "photo13", description: "photo13 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})
photo44 = Photo.create({title: "photo14", description: "photo14 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})
photo45 = Photo.create({title: "photo15", description: "photo15 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})
photo46 = Photo.create({title: "photo16", description: "photo16 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo47 = Photo.create({title: "photo17", description: "photo17 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser4.id})
photo48 = Photo.create({title: "photo18", description: "photo18 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})
photo49 = Photo.create({title: "photo19", description: "photo19 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})

photo50 = Photo.create({title: "photo19", description: "photo19 des Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo", uploader_id: seeduser5.id})




photo1.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-17.jpg"), filename: 'catstation-cat-photo-17.jpg')
photo2.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-2.jpeg"), filename: 'catstation-cat-photo-2.jpeg')
photo3.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-3.jpeg"), filename: 'catstation-cat-photo-3.jpeg')
photo4.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-4.jpeg"), filename: 'catstation-cat-photo-4.jpeg')
photo5.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-5.jpeg"), filename: 'catstation-cat-photo-5.jpeg')
photo6.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-6.jpeg"), filename: 'catstation-cat-photo-6.jpeg')
photo7.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-7.jpeg"), filename: 'catstation-cat-photo-7.jpeg')
photo8.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-8.jpeg"), filename: 'catstation-cat-photo-8.jpeg')
photo9.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-9.jpeg"), filename: 'catstation-cat-photo-9.jpeg')

photo10.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-10.jpeg"), filename: 'catstation-cat-photo-10.jpeg')
photo11.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-11.jpeg"), filename: 'catstation-cat-photo-11.jpeg')
photo12.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-12.jpeg"), filename: 'catstation-cat-photo-12.jpeg')
photo13.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-13.jpeg"), filename: 'catstation-cat-photo-13.jpeg')
photo14.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-14.jpeg"), filename: 'catstation-cat-photo-14.jpeg')
photo15.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-15.jpeg"), filename: 'catstation-cat-photo-15.jpeg')
photo16.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-16.jpeg"), filename: 'catstation-cat-photo-16.jpeg')
photo17.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-1.jpg"), filename: 'catstation-cat-photo-1.jpg')
photo18.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-18.jpeg"), filename: 'catstation-cat-photo-18.jpeg')
photo19.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-19.jpeg"), filename: 'catstation-cat-photo-19.jpeg')

photo20.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-20.jpeg"), filename: 'catstation-cat-photo-20.jpeg')
photo21.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-21.jpeg"), filename: 'catstation-cat-photo-21.jpeg')
photo22.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-22.jpeg"), filename: 'catstation-cat-photo-22.jpeg')
photo23.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-23.jpeg"), filename: 'catstation-cat-photo-23.jpeg')
photo24.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-24.jpeg"), filename: 'catstation-cat-photo-24.jpeg')
photo25.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-25.jpeg"), filename: 'catstation-cat-photo-25.jpeg')
photo26.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-26.jpeg"), filename: 'catstation-cat-photo-26.jpeg')
photo27.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-27.jpeg"), filename: 'catstation-cat-photo-27.jpeg')
photo28.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-28.jpeg"), filename: 'catstation-cat-photo-28.jpeg')
photo29.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-29.jpeg"), filename: 'catstation-cat-photo-29.jpeg')

photo30.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-30.jpeg"), filename: 'catstation-cat-photo-30.jpeg')
photo31.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-31.jpeg"), filename: 'catstation-cat-photo-31.jpeg')
photo32.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-32.jpeg"), filename: 'catstation-cat-photo-32.jpeg')
photo33.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-33.jpeg"), filename: 'catstation-cat-photo-33.jpeg')
photo34.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-34.jpeg"), filename: 'catstation-cat-photo-34.jpeg')
photo35.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-35.jpeg"), filename: 'catstation-cat-photo-35.jpeg')
photo36.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-36.jpeg"), filename: 'catstation-cat-photo-36.jpeg')
photo37.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-37.jpeg"), filename: 'catstation-cat-photo-37.jpeg')
photo38.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-38.jpeg"), filename: 'catstation-cat-photo-38.jpeg')
photo39.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-39.jpeg"), filename: 'catstation-cat-photo-39.jpeg')

photo40.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-40.jpeg"), filename: 'catstation-cat-photo-40.jpeg')
photo41.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-41.jpeg"), filename: 'catstation-cat-photo-41.jpeg')
photo42.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-42.jpeg"), filename: 'catstation-cat-photo-42.jpeg')
photo43.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-43.jpeg"), filename: 'catstation-cat-photo-43.jpeg')
photo44.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-44.jpeg"), filename: 'catstation-cat-photo-44.jpeg')
photo45.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-45.jpeg"), filename: 'catstation-cat-photo-45.jpeg')
photo46.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-46.jpeg"), filename: 'catstation-cat-photo-46.jpeg')
photo47.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-47.jpeg"), filename: 'catstation-cat-photo-47.jpeg')
photo48.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-48.jpeg"), filename: 'catstation-cat-photo-48.jpeg')
photo49.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-49.jpeg"), filename: 'catstation-cat-photo-49.jpeg')

photo50.image.attach(io: open("https://catstation-seeds.s3-us-west-1.amazonaws.com/catstation-cat-photo-50.jpeg"), filename: 'catstation-cat-photo-50.jpeg')



# photo10.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-10.jpg'), filename: 'cat1-10.jpg')
# photo11.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-11.jpg'), filename: 'cat1-11.jpg')
# photo12.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-12.jpg'), filename: 'cat1-12.jpg')
# photo13.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-13.jpg'), filename: 'cat1-13.jpg')
# photo14.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-14.jpg'), filename: 'cat1-14.jpg')
# photo15.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-15.jpg'), filename: 'cat1-15.jpg')
# photo16.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-16.jpg'), filename: 'cat1-16.jpg')
# photo17.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-17.jpg'), filename: 'cat1-17.jpg')
# photo18.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-18.jpg'), filename: 'cat1-18.jpg')
# photo19.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-19.jpg'), filename: 'cat1-19.jpg')
# photo20.image.attach(io: open('https://catstation-seeds.s3-us-west-1.amazonaws.com/cat1-20.jpg'), filename: 'cat1-20.jpg')






