class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :show, null: false, foreign_key: true
      t.string :content
      t.integer :stars

      t.timestamps
    end
  end
end
