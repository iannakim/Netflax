class ShowGenreSerializer < ActiveModel::Serializer
  attributes :id, :genre, :show
  belongs_to :genre
  belongs_to :show
end
