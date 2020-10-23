class AddToListSerializer < ActiveModel::Serializer
  attributes :id, :list, :show
  belongs_to :list 
  belongs_to :show
end
