class UserShared < ActiveRecord::Migration[6.1]
  def change
    create_table :user_shared do |t|
      t.references :sharer_id, foreign_key: { to_table: 'users' }
      t.references :shared_id, foreign_key: { to_table: 'users' }
      t.timestamps
    end
  end
end
