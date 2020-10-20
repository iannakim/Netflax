class ShowGenreSerializer < ActiveModel::Serializer
  attributes :id, :genre
  belongs_to :genre
  belongs_to :show
end
