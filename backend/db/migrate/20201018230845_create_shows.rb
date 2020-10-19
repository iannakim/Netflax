class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.belongs_to :type, null: false, foreign_key: true
      t.string :image
      t.string :title
      t.integer :year
      t.string :maturity
      t.integer :runtime
      t.belongs_to :genre, null: false, foreign_key: true
      t.string :description
      t.string :casts
      t.string :creators
      t.boolean :history, :default => false

      t.timestamps
    end
  end
end
