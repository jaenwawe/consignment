class User < ApplicationRecord
    has_many :products
    has_many :order_items, through: :products
    #  has_many :orders, through: :orders_items
    has_many :orders

    has_secure_password
    validates :email, :password, presence: true

end

