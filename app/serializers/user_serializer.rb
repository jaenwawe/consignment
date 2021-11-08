class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :store_name, :email, :username, :phone_number, :address, :state, :zipcode, :gender, :store
end
