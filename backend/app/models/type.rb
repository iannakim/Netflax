class Type < ApplicationRecord
  has_many :shows, :dependent => :destroy
end
