class Review < ApplicationRecord
  belongs_to :user
  belongs_to :show
  validates :user, presence: true
  validates :content, presence: true
end
