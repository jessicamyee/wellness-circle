class User < ApplicationRecord
  has_secure_password

  has_many :wellness_data
  has_many :user_shares, foreign_key: :sharer_id, class_name: "UserShare"
  

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8 }

  def shared_recipients
    user_shares.map do |user_shares|
      user_shares.recipient
    end
  end


  def averages_for_users_shared_with_self
    UserShare.where(recipient: self).map do |user_share|
      user_share.sharer.personal_average_data
    end
  end

  def personal_average_data
    {
      id: id,
      full_name: first_name + " " + last_name,
      social_average: truncated_average_for(:social_score),
      physical_average: truncated_average_for(:physical_score),
      emotional_average: truncated_average_for(:emotional_score),
      intellectual_average: truncated_average_for(:intellectual_score),
      occupational_average: truncated_average_for(:occupational_score),
      spiritual_average: truncated_average_for(:spiritual_score),
    }
  end

  def historical_data
    wellness_data.last(21).map { |datum| 
      {
        id: datum.id,
        social_score: datum.social_score,
        physical_score: datum.physical_score,
        emotional_score: datum.emotional_score,
        intellectual_score: datum.intellectual_score,
        occupational_score: datum.occupational_score,
        spiritual_score: datum.spiritual_score,
        created_at: datum.created_at,
      }
    }.reverse
  end

  private

  def truncated_average_for(wellness_category)
    wellness_data.where('created_at > ?', 7.days.ago).average(wellness_category).truncate(2).to_s('F')
  end
end
