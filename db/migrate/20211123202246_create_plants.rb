class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.references :user, null: false
      t.references :plant, null: false
      t.string :gist, null: false
      t.string :note, null: true

      t.timestamps
    end
    
    create_table :plants do |t|
      t.string :name, null: :false 
      t.string :photo_url, null: :false 

      t.timestamps
    end
  end
end
