class UserShare < ApplicationRecord
  belongs_to :sharer, class_name: 'User', foreign_key: :sharer_id
  belongs_to :recipient, class_name: 'User', foreign_key: :recipient_id
end
