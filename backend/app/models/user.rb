class User < ApplicationRecord
  has_many :lists, :dependent => :destroy
  has_many :reviews, :dependent => :destroy
  has_many :add_to_lists, through: :lists, :dependent => :destroy

end
