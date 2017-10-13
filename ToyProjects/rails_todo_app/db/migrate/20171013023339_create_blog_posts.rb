class CreateBlogPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :blog_posts do |t|
      t.integer :user_id, null: false 
      t.string :title, null: false 
      t.text :body, null: false 

      t.timestamps
    end

    add_index :blog_posts, :user_id
  end
end
