class User < ApplicationRecord
  has_many :user_shares, foreign_key: :sharer_id, class_name: "UserShare"
  has_secure_password

  validates :username, presence: true, uniqueness: true
  # validates :password, length: { minimum: 8 }

  

  def shared_recipients
    user_shares.map do |user_shares|
      user_shares.recipient
    end
  end
end
