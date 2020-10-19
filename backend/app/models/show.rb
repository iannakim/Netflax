class Show < ApplicationRecord
  belongs_to :type
  belongs_to :genre
  has_many :add_to_lists, :dependent => :destroy
  has_many :reviews, :dependent => :destroy
end
