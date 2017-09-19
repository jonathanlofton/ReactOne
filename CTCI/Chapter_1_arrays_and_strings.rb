
# implement an algorithm to tell if a string has all unique characters

# side cases? 

def unique_characters(array)
    hash = {}
    array.chars.each do |ch|
        hash[ch] ? (return false) : hash[ch] = true 
    end 
    true
end 

p unique_characters("catapillar")
p unique_characters("abcdefghi")

