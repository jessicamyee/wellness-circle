class CreateUserShareTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :user_shared

    create_table :user_shares do |t|
      t.references :sharer, foreign_key: { to_table: 'users' }
      t.references :recipient, foreign_key: { to_table: 'users' }
      t.timestamps
    end
  end
end
