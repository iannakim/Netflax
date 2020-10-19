class ShowSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :year, :maturity, :runtime, :description, :casts, :creators, :history
  belongs_to :genre
  belongs_to :type
  has_many :reviews
end
