class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false 
      t.string :password_digest, null: false  
      t.string :session_token, null: false

      t.timestamps
    end
    # use add_index to have quick lookups for user names and session
    # tokens but is unecessary for password_digest
    add_index :users, :name, unique: true 
    add_index :users, :session_token, unique: true  
  end
end
