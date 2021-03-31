# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserShare.destroy_all
WellnessDatum.destroy_all
User.destroy_all


@first_user = User.create!(username: 'ace', first_name: 'Rory', last_name: 'Gilmore', password: 'Password')
@second_user = User.create!(username: 'oh_hay_lorelai', first_name: 'Lorelai', last_name: 'Gilmore', password: 'Password')
@third_user = User.create!(username: 'rich_logan', first_name: 'Logan', last_name: 'Huntzberger', password: 'Password')
puts "#{User.count} users created"

@wellness_record1 = WellnessDatum.create!(social_score: 3, physical_score: 2, emotional_score: 8, intellectual_score: 10, occupational_score: 8, spiritual_score: 5, user: @first_user)
@wellness_record2 = WellnessDatum.create!(social_score: 8, physical_score: 2, emotional_score: 6, intellectual_score: 8, occupational_score: 8, spiritual_score: 5, user: @second_user)
@wellness_record3 = WellnessDatum.create!(social_score: 10, physical_score: 7, emotional_score: 3, intellectual_score: 8, occupational_score: 3, spiritual_score: 5, user: @third_user)
@wellness_record4 = WellnessDatum.create!(social_score: 8, physical_score: 6, emotional_score: 6, intellectual_score: 8, occupational_score: 6, spiritual_score: 4, user: @first_user)
puts "#{WellnessDatum.count} wellness records created"



UserShare.create!(sharer: @first_user , recipient: @second_user)
UserShare.create!(sharer: @first_user , recipient: @third_user)
puts "#{UserShare.count} shared records created"