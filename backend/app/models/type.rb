class Type < ApplicationRecord
  has_many :shows, :dependent => :destroy
  has_many :genres, through: :shows, :dependent => :destroy
end
