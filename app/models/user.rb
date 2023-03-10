class User < ApplicationRecord
    has_secure_password

    has_many :recipes, dependent: :destroy

    validates :user_name, presence: true, uniqueness: true
    validates :password, presence: true

end
