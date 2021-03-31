class CreateWellnessData < ActiveRecord::Migration[6.1]
  def change
    create_table :wellness_data do |t|
      t.integer :social_score
      t.integer :physical_score
      t.integer :emotional_score
      t.integer :intellectual_score
      t.integer :occupational_score
      t.integer :spiritual_score
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
