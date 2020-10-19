class ShowSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :year, :maturity, :runtime, :description, :casts, :creators, :history
  belongs_to :type
  belongs_to :genre
  has_many :reviews
end
