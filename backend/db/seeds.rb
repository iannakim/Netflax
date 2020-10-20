
Review.delete_all
AddToList.delete_all
List.delete_all
User.delete_all
Show.delete_all
Genre.delete_all
Type.delete_all

Review.reset_pk_sequence
AddToList.reset_pk_sequence
List.reset_pk_sequence
User.reset_pk_sequence
Show.reset_pk_sequence
Genre.reset_pk_sequence
Type.reset_pk_sequence

#Trending: https://api.themoviedb.org/3/trending/all/day?api_key=c181df741a62e7ef37c802cdeb5ff09b
#Popular TV Shows: https://api.themoviedb.org/3/tv/popular?api_key=c181df741a62e7ef37c802cdeb5ff09b&language=en-US&page=1
#Movie Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=c181df741a62e7ef37c802cdeb5ff09b&language=en-US
#TV Genres: https://api.themoviedb.org/3/genre/tv/list?api_key=c181df741a62e7ef37c802cdeb5ff09b&language=en-US
# Popular Movies: https://api.themoviedb.org/3/discover/movie?api_key=c181df741a62e7ef37c802cdeb5ff09b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1


#######TYPE

movie = Type.create!(name: "Movie") 
tv = Type.create!(name: "TV Show")


#######GENRE
gen_action = Genre.create!(name: "Action & Adventure")
gen_animation = Genre.create!(name: "Animation")
gen_comedy = Genre.create!(name: "Comedy")
gen_crime = Genre.create!(name: "Crime Thriller")
gen_drama = Genre.create!(name: "Drama")
gen_romcom = Genre.create!(name: "Romantic Comedy")
gen_scifi = Genre.create!(name: "Sci-Fi & Fantasy")


#######SHOW (Movie Only)
indy = Show.create!(type_id: 1, image: "https://sc-events.s3.amazonaws.com/4178068/main.jpg", title: "Indiana Jones and the Temple of Doom", year: 1984, maturity: "PG", runtime: 118, genre_id: 1, description: "In 1935, Indiana Jones arrives in India, still part of the British Empire, and is asked to find a mystical stone. He then stumbles upon a secret cult committing enslavement and human sacrifices in the catacombs of an ancient palace.", casts: "Harrison Ford, Kate Capshaw, Ke Huy Quan, Amrish Puri", creators: "Steven Spielberg", history: false)
up = Show.create!(type_id: 1, image: "https://vignette.wikia.nocookie.net/transcripts/images/9/97/Disney_and_Pixar%27s_Up_-_iTunes_Movie_Poster.jpg/revision/latest?cb=20170206002656", title: "UP", year: 2009, maturity: "PG", runtime: 96, genre_id: 2, description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.", casts: "Edward Asner, Jordan Nagai, John Ratzenberger", creators: "Pete Docter", history: false)
stepbros = Show.create!(type_id: 1, image: "https://fanart.tv/fanart/movies/12133/movieposter/step-brothers-530cd05fd70f2.jpg", title: "Step Brothers", year: 2008, maturity: "R", runtime: 98, genre_id: 3, description: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.", casts: "Will Ferrell, John C. Reilly, Mary Steenburgen", creators: "Adam McKay", history: false)
taken = Show.create!(type_id: 1, image: "https://www.what-song.com/images/posters/270/Taken-200.jpg", title: "Taken", year: 2008, maturity: "PG-13", runtime: 90, genre_id: 4, description: "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.", casts: "Liam Neeson, Maggie Grace, Famke Janssen", creators: "Pierre Morel", history: false)
help = Show.create!(type_id: 1, image: "http://is5.mzstatic.com/image/thumb/Video42/v4/37/fd/fd/37fdfdac-4890-f69f-d4e5-dc63372f7f86/source/1200x630bb.jpg", title: "The Help", year: 2011, maturity: "PG-13", runtime: 146, genre_id: 5, description: "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.", casts: "Emma Stone, Viola Davis, Octavia Spencer", creators: "Tate Taylor", history: false)
mail = Show.create!(type_id: 1, image: "https://serpentslair.files.wordpress.com/2012/02/youve-got-mail-movie-poster.jpg", title: "You've Got Mail", year: 1998, maturity: "PG", runtime: 119, genre_id: 6, description: "Two business rivals who despise each other in real life unwittingly fall in love over the Internet.", casts: "Tom Hanks, Meg Ryan", creators: "Nora Ephron", history: false)
starwars = Show.create!(type_id: 1, image: "https://www.laughingplace.com/w/wp-content/uploads/2020/02/star-wars-the-rise-of-skywalker.jpeg", title: "Star Wars: Episode IX - The Rise of Skywalker", year: 2019, maturity: "PG-13", runtime: 141, genre_id: 7, description: "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.", casts: "Daisy Ridley, John Boyega, Oscar Isaac", creators: "J.J. Abrams", history: false)

#######USER
anna = User.create!(name: "Anna Kim", email: "anna@gmail.com", password_digest:"abc123")

#######LIST
favorite = List.create!(name: "Favorites", user_id: 1)
watched = List.create!(name: "Watched List", user_id: 1)


#######addToList
add1 = AddToList.create!(list_id: 1, show_id: 2)
add2 = AddToList.create!(list_id: 1, show_id: 5)
add3 = AddToList.create!(list_id: 1, show_id: 6)
add4 = AddToList.create!(list_id: 2, show_id: 1)
add5 = AddToList.create!(list_id: 2, show_id: 7)


#######REVIEW
review1 = Review.create!(user_id: 1, show_id: 2, content: "This was a great movie!", stars: 5)
review2 = Review.create!(user_id: 1, show_id: 5, content: "A must watch! Heartwarming and powerful story", stars: 5)
review3 = Review.create!(user_id: 1, show_id: 6, content: "I love Tom Hanks! All time favorite rom-com!", stars: 5)
review4 = Review.create!(user_id: 1, show_id: 1, content: "Made me cry, laugh throughout the entire movie", stars: 5)
review5 = Review.create!(user_id: 1, show_id: 7, content: "Meh, it was okay", stars: 3)

