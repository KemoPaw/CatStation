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
photo2 = Photo.create({title: "Bloo", description: "A photo of my cat named Bloo!", uploader_id: demouser.id})
photo3 = Photo.create({title: "Razzy being a Charmer", description: "I took this photo a few months ago, but she's such a beauty.", uploader_id: demouser.id})
photo4 = Photo.create({title: "Cheeto Upclose", description: "A kitty my friend owns, he's quite photogentic!", uploader_id: demouser.id})
photo5 = Photo.create({title: "Tofu being in his element", description: "I didn't expect this photo to turn out as well as it did. The rest of the photos from this shoot were terrible. :(", uploader_id: demouser.id})
photo6 = Photo.create({title: "Stray kitty in Italy", description: "According to the locals his name is Pepper, and he has a sister named Salt.", uploader_id: seeduser2.id})
photo7 = Photo.create({title: "Princess in a daze", description: "Royalty, but also a brat for treats.", uploader_id: seeduser2.id})
photo8 = Photo.create({title: "Chedder in a huge Daze", description: "This photo was taken upside down, I love how funny he is!", uploader_id: seeduser2.id})
photo9 = Photo.create({title: "Mimi as a Kitten", description: "Mimi sadly had to be re-homed with my parents because my current apartment doesn't allow pets. I miss her dearly.", uploader_id: seeduser2.id})

photo10 = Photo.create({title: "Saph looking surprised", description: "Her eyes are even more blue in person, she also loves pinecones.", uploader_id: seeduser2.id})
photo11 = Photo.create({title: "Boots being Boots", description: "My brother-in-law's cat, he's always down to play!", uploader_id: seeduser1.id})
photo12 = Photo.create({title: "Kitten that I'm fostering", description: "I also love to foster kitties! This one is named Nier, after a video game I'm currently playing!", uploader_id: seeduser1.id})
photo13 = Photo.create({title: "Plaid taking a Nap", description: "When she was a kitten Plaid insisted to only sleep in plaid patterned blankets, hence her name.", uploader_id: seeduser1.id})
photo14 = Photo.create({title: "Winter doing a Stretch", description: "Winter is my neighbor's cat who enjoys visiting time to time!", uploader_id: seeduser1.id})
photo15 = Photo.create({title: "Winter's quiet stare", description: "She is so photogenic, I am so happy whenever she makes time to visit!", uploader_id: seeduser1.id})
photo16 = Photo.create({title: "Mochi with his jade eyes", description: "I never thought I would own a cat, much less one named Mochi.", uploader_id: seeduser1.id})
photo17 = Photo.create({title: "Grey fur with Mint eyes", description: "Mochi's younger brother named Flakes, short for Bonito Flakes.", uploader_id: seeduser1.id})
photo18 = Photo.create({title: "Nap time!", description: "I miss Chowder when he was just an adorable kitten.", uploader_id: seeduser2.id})
photo19 = Photo.create({title: "Trias as a kitten", description: "My sister's best friend.", uploader_id: seeduser2.id})
photo20 = Photo.create({title: "Cheepuff from awhile back", description: "Cheepuff always found a way to get my mother to give him more treats, and it shows.", uploader_id: seeduser2.id})

photo21 = Photo.create({title: "Odyssey looks ready for an adventure", description: "He's always open to joining me on my hikes, no collar needed!", uploader_id: seeduser3.id})
photo22 = Photo.create({title: "I love how Circus photographs", description: "He's always popular with anybody that visits, too bad he's super shy.", uploader_id: seeduser3.id})
photo23 = Photo.create({title: "Foster kitten named Socks", description: "Socks has a lot of energy, and I think it shows in this photo.", uploader_id: seeduser3.id})
photo24 = Photo.create({title: "Lily looking like her gorgous self", description: "Lily, or I like to call her my Cuddlebug!", uploader_id: seeduser3.id})
photo25 = Photo.create({title: "Gary being Gary", description: "My husband's favorite cat, but he'll never admit it himself.", uploader_id: seeduser3.id})
photo26 = Photo.create({title: "Toast on their Adventure", description: "Toast loves to explore around the woods near our home! I think he believes that he's a detective among us.", uploader_id: seeduser4.id})
photo27 = Photo.create({title: "photo of Spot", description: "Spot loves to spot what food we might spill during meals.", uploader_id: seeduser4.id})
photo28 = Photo.create({title: "Fenty spacing out", description: "This was taken after she rolled around in my makeup the other day. Took a few hours to clean her all up.", uploader_id: seeduser4.id})
photo29 = Photo.create({title: "Chester", description: "At home he's indifferent about whatever we're eating, unless it smells like cheese and has a crunch to it.", uploader_id: seeduser4.id})
photo30 = Photo.create({title: "Mookie waking up from their nap", description: "Between you and me, this cat loves to play with Volleyballs. Not too sure why though.", uploader_id: seeduser2.id})


photo31 = Photo.create({title: "Freckles as a kitten", description: "My daughter named her after her own freckles, I think it's a way for her to see her freckles in a positive light. :)", uploader_id: seeduser6.id})
photo32 = Photo.create({title: "A kitty I saw yesterday!", description: "They were very calm when I was taking their photo, then they left.", uploader_id: seeduser6.id})
photo33 = Photo.create({title: "Snaps and some leaves", description: "Snaps is a very special cat, he's deaf and loves to stroll around in nature.", uploader_id: seeduser6.id})
photo34 = Photo.create({title: "Winter photoshoot with Frosty", description: "Frosty and Snaps are siblings. She's extremely beautiful and enjoys exploring with her brother.", uploader_id: seeduser6.id})
photo35 = Photo.create({title: "Sam the family cat", description: "I grew up with Sam, and miss him.", uploader_id: seeduser6.id})
photo36 = Photo.create({title: "Fauna before out roadtrip!", description: "Fauna was not pleased after we got back, but after a day she warmed up again.", uploader_id: seeduser4.id})
photo37 = Photo.create({title: "Always a bit worried", description: "Gary for some reason makes the funniest expressions.", uploader_id: seeduser4.id})
photo38 = Photo.create({title: "Thinking about Cheesecake, also our cat's name", description: "Cheesecake will even do tricks for cheese, yes we fed her a little after this photoshoot.", uploader_id: seeduser4.id})
photo39 = Photo.create({title: "Still worried", description: "We treat Gary very well, this is just a common expression that he makes for no reason.", uploader_id: seeduser4.id})

photo40 = Photo.create({title: "Kitty!", description: "Small Kitty, Warm Kitty, Little Ball of Fur.", uploader_id: seeduser4.id})
photo41 = Photo.create({title: "It's almost autumn again", description: "Lulu is our outdoor cat, but she comes when we call her name.", uploader_id: seeduser5.id})
photo42 = Photo.create({title: "Felix", description: "Felix is my coworker's cat. Sometimes I see him during video calls and it always makes the meeting better.", uploader_id: seeduser5.id})
photo43 = Photo.create({title: "My Fiance's kitten named Snowball", description: "Snowball is always napping, I feel like I've seen them awake only once.", uploader_id: seeduser5.id})
photo44 = Photo.create({title: "Flora with Floral", description: "She loves all floral things and just plants in general.", uploader_id: seeduser5.id})
photo45 = Photo.create({title: "Meowsers!", description: "The fluffball that my mother loves, Meowsers always follows her around the house.", uploader_id: seeduser5.id})
photo46 = Photo.create({title: "Litten", description: "I was setting up a fun photoshoot and he instantly made it so much better.", uploader_id: seeduser4.id})
photo47 = Photo.create({title: "Litten almost Licking", description: "Another shot of Litten, it's almost like he knows how to pose for a photo.", uploader_id: seeduser4.id})
photo48 = Photo.create({title: "And pose!", description: "Jazz is my dance teacher's cat. I feel that maybe she gets her poses from watching her owner dance.", uploader_id: seeduser5.id})
photo49 = Photo.create({title: "Our foster kitten named Stripes!", description: "Stripes loves to go out to his favorite tree to climb. We're going to miss him when he gets adopted.", uploader_id: seeduser5.id})
photo50 = Photo.create({title: "Forever loving the blue Blanket", description: "Wherever you lay the blue blanket, Bucket will sit on it.", uploader_id: seeduser5.id})




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






