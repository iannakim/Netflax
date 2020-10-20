class User < ApplicationRecord
  has_many :lists, :dependent => :destroy
  has_many :reviews, :dependent => :destroy
  has_many :add_to_lists, through: :lists, :dependent => :destroy
  
  has_secure_password
  validates :name, :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { in: 6..10 }

end
