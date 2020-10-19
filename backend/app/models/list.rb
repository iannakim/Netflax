class List < ApplicationRecord
  belongs_to :user
  has_many :add_to_lists, :dependent => :destroy
end
