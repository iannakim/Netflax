
ShowGenre.delete_all
AddToList.delete_all
List.delete_all
User.delete_all
Show.delete_all
Genre.delete_all
Type.delete_all

ShowGenre.reset_pk_sequence
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


# Type
Type.create!(name: "Movie") 
Type.create!(name: "TV Show")


# Movie Genres
url1 = "https://api.themoviedb.org/3/genre/movie/list?api_key=c181df741a62e7ef37c802cdeb5ff09b&language=en-US"
restClientResponseObject1 = RestClient.get(url1)
jsonButItsAString1 = restClientResponseObject1.body
moviegenre_hash = JSON.parse(jsonButItsAString1)

# TV Genres
url1 = "https://api.themoviedb.org/3/genre/tv/list?api_key=c181df741a62e7ef37c802cdeb5ff09b&language=en-US"
restClientResponseObject1 = RestClient.get(url1)
jsonButItsAString1 = restClientResponseObject1.body
tvgenre_hash = JSON.parse(jsonButItsAString1)

genrelist = moviegenre_hash["genres"] | tvgenre_hash["genres"]

genrelist.each do |genre|
  Genre.create!(
    :id => genre["id"],
    :name => genre["name"]
  )
end



# Trending Shows
(1..10).to_a.each do |page|
  url3 = "https://api.themoviedb.org/3/trending/all/day?page=" + page.to_s + "&api_key=c181df741a62e7ef37c802cdeb5ff09b"
  restClientResponseObject3 = RestClient.get(url3)
  jsonButItsAString3 = restClientResponseObject3.body
  trending_hash = JSON.parse(jsonButItsAString3)

  trending_hash["results"].map do |show|
    if show["backdrop_path"]
      bkdrop = "https://image.tmdb.org/t/p/w1280" + show["backdrop_path"]
    else 
      bkdrop = "https://www.haeger.com/images/coming-soon.jpg"
    end
    if show["media_type"] == "tv"
      medtype = 2
      showname = show["name"]
      date = show["first_air_date"]
    else
      medtype = 1
      showname = show["title"]
      date = show["release_date"]
    end
    Show.create!(
      id: show["id"],
      type_id: medtype,
      poster: "https://image.tmdb.org/t/p/w500" + show["poster_path"],
      backdrop: bkdrop,
      title: showname,
      language: show["original language"],
      average_rating: show["vote_average"],
      overview: show["overview"],
      release_date: date,
      popularity: show["popularity"]
    )
    show["genre_ids"].each do |id|
      ShowGenre.create!(
        genre_id: id,
        show_id: show["id"]
      )
    end
  end
end




# User
anna = User.create!(first_name: "Anna", last_name: "Kim", email: "anna@gmail.com", password:"abc123")


# # List
# favorite = List.create!(name: "Favorites", user_id: 1)
# watched = List.create!(name: "Watched List", user_id: 1)


# # addToList
# add1 = AddToList.create!(list_id: 1, show_id: 2)
# add2 = AddToList.create!(list_id: 1, show_id: 5)
# add3 = AddToList.create!(list_id: 1, show_id: 6)
# add4 = AddToList.create!(list_id: 2, show_id: 1)
# add5 = AddToList.create!(list_id: 2, show_id: 7)


puts "🌵🥯🌵🥯"