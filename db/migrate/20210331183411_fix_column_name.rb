class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_shared, :sharer_id_id, :sharer_id
    rename_column :user_shared, :shared_id_id, :shared_id
  end
end
