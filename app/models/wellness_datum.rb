class WellnessDatum < ApplicationRecord
  belongs_to :user, required: true
end
