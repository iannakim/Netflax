class Genre < ApplicationRecord
  has_many :shows, :dependent => :destroy
  has_many :types, through: :shows, :dependent => :destroy
end
