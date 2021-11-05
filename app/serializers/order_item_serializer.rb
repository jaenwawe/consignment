class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :customer_id
  has_one :order
  has_one :product
end
