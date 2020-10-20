class User < ApplicationRecord
  has_many :lists, :dependent => :destroy
  has_many :add_to_lists, through: :lists, :dependent => :destroy
  
  has_secure_password
  validates :first_name, :last_name, :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { in: 6..10 }


  def full_name
    user = self
    "#{user.first_name.capitalize} #{user.last_name.capitalize}"
  end


end
