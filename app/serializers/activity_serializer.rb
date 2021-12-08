class ActivitySerializer < ActiveModel::Serializer
    attributes :id,
               :user_id,
               :plant,
               :gist,
               :note,
               :created_at
  end
  