class Activity < ApplicationRecord
    belongs_to :user
    belongs_to :plant

    def group_by_criteria
        created_at.to_date.to_s(:db)
    end
end
