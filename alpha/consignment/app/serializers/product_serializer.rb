class ProductSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_item, :category, :size, :price, :review_stars, :photo, :review
end
