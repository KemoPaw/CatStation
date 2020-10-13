@users.each do |per|
    json.set! per.id do
        json.extract! per, :id, :username, :email
    end
end