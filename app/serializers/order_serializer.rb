class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total, :payment_method
end
