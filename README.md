# recipe-app

-in progress 
-windows:
--sudo service postgresql start

-mac:
brew services start postgresql
-brew services stop postgresql

root:
bundle install
rails db:create
rails db:migrate
rails db:seed

frontend directory:
yarn install