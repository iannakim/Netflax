class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.belongs_to :type, null: false, foreign_key: true
      t.string :poster
      t.string :backdrop
      t.string :title
      t.string :language
      t.float :average_rating
      t.string :overview
      t.string :release_date
      t.integer :popularity
      t.boolean :history, :default => false

      t.timestamps
    end
  end
end
