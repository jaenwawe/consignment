class UserSerializer < ActiveModel::Serializer
  attributes  :id, :first_name, :last_name, :store_name, :username,  :email,  :store

end
