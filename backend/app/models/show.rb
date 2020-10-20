class Show < ApplicationRecord
  belongs_to :type
  has_many :show_genres, :dependent => :destroy
  has_many :add_to_lists, :dependent => :destroy
end
