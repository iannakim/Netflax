class AddToList < ApplicationRecord
  belongs_to :list
  belongs_to :show
  validates :list, presence: true
  validates :show, presence: true
end


