class ShowSerializer < ActiveModel::Serializer
  attributes :id, :type_id, :poster, :backdrop, :title, :language, :average_rating, :overview, :release_date, :popularity, :history
  belongs_to :type
  has_many :show_genres
end
