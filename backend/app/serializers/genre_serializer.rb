class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :show_genres
end
