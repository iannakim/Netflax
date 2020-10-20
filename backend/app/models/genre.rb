class Genre < ApplicationRecord
  has_many :show_genres, :dependent => :destroy
end
