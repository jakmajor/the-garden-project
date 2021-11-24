class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image_url, :bio, :plants, :gardens
end
