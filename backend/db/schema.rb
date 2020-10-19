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

ActiveRecord::Schema.define(version: 2020_10_18_231838) do

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

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "show_id", null: false
    t.string "content"
    t.integer "stars"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["show_id"], name: "index_reviews_on_show_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "shows", force: :cascade do |t|
    t.bigint "type_id", null: false
    t.string "image"
    t.string "title"
    t.integer "year"
    t.string "maturity"
    t.integer "runtime"
    t.bigint "genre_id", null: false
    t.string "description"
    t.string "casts"
    t.string "creators"
    t.boolean "history", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["genre_id"], name: "index_shows_on_genre_id"
    t.index ["type_id"], name: "index_shows_on_type_id"
  end

  create_table "types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "add_to_lists", "lists"
  add_foreign_key "add_to_lists", "shows"
  add_foreign_key "lists", "users"
  add_foreign_key "reviews", "shows"
  add_foreign_key "reviews", "users"
  add_foreign_key "shows", "genres"
  add_foreign_key "shows", "types"
end
