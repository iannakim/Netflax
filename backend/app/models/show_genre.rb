class ShowGenre < ApplicationRecord
  belongs_to :genre
  belongs_to :show
end
