# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_31_192619) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "user_shares", force: :cascade do |t|
    t.bigint "sharer_id"
    t.bigint "recipient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recipient_id"], name: "index_user_shares_on_recipient_id"
    t.index ["sharer_id"], name: "index_user_shares_on_sharer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wellness_data", force: :cascade do |t|
    t.integer "social_score"
    t.integer "physical_score"
    t.integer "emotional_score"
    t.integer "intellectual_score"
    t.integer "occupational_score"
    t.integer "spiritual_score"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_wellness_data_on_user_id"
  end

  add_foreign_key "user_shares", "users", column: "recipient_id"
  add_foreign_key "user_shares", "users", column: "sharer_id"
  add_foreign_key "wellness_data", "users"
end
