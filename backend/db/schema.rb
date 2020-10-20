# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_20_220901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "add_to_lists", force: :cascade do |t|
    t.bigint "list_id", null: false
    t.bigint "show_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["list_id"], name: "index_add_to_lists_on_list_id"
    t.index ["show_id"], name: "index_add_to_lists_on_show_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lists", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "show_genres", force: :cascade do |t|
    t.bigint "genre_id", null: false
    t.bigint "show_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["genre_id"], name: "index_show_genres_on_genre_id"
    t.index ["show_id"], name: "index_show_genres_on_show_id"
  end

  create_table "shows", force: :cascade do |t|
    t.bigint "type_id", null: false
    t.string "poster"
    t.string "backdrop"
    t.string "title"
    t.string "language"
    t.float "average_rating"
    t.string "overview"
    t.string "release_date"
    t.integer "popularity"
    t.boolean "history", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["type_id"], name: "index_shows_on_type_id"
  end

  create_table "types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "add_to_lists", "lists"
  add_foreign_key "add_to_lists", "shows"
  add_foreign_key "lists", "users"
  add_foreign_key "show_genres", "genres"
  add_foreign_key "show_genres", "shows"
  add_foreign_key "shows", "types"
end
