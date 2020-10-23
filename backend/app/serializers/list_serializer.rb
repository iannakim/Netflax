class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :add_to_lists
  belongs_to :user
end
