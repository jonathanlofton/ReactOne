def question_marks(string)
  question_mark_count = 0 
  first_num = nil 
  count = 0 
  string.chars.each_with_index do |ch, idx|
    if is_integer?(ch) && !first_num
      question_mark_count = 0 
      first_num = ch.to_i
    elsif is_integer?(ch) && ch.to_i + first_num == 10
      if question_mark_count != 3 
        return false 
      else
        count += 1
        first_num = ch.to_i 
      end 
    end 
    question_mark_count += 1 if ch == "?"
  end 
  count > 0 
end 

def is_integer?(ch)
  ch.to_i.to_s == ch
end

p "#{question_marks("aa6?9")}: should be false"
p "#{question_marks("arrb6???4xxbl5???eee5")}: should be true"
p "#{question_marks("acc?7??sss?3rr1??????5")}: should be true"
p "#{question_marks("5??aaaaaaaaaaaaaaaaaaa?5?5")}: should be false"
p "#{question_marks("9???1???9???1???9")}: should be true"

def square_of_vowels(array)
  vowels = ["a","e","i","o","u"]
  num_rows = array.length
  num_cols = array[0].split("").length 
  
  array = array.map do |string|
    string.split("")
  end 
  
  (0..num_rows).each do |idx1|
    (0..num_cols).each do |idx2|
      next if array[idx1 + 1] == nil 
      
      if vowels.include?(array[idx1][idx2])
        if vowels.include?(array[idx1][idx2 + 1])
          if vowels.include?(array[idx1 + 1][idx2]) 
            if vowels.include?(array[idx1 + 1][idx2 + 1]) 
              return "#{idx1}-#{idx2}"
            end 
          end 
        end 
      end 
    end 
  end 
  "Not Found" 
end 

array1 = ["aqrst","ukaei","ffooo"]
array2 = ["gg","ff"]
array3 = ["aeiou", "aabcd", "ggufu"]

p "#{square_of_vowels(array1)}: should be true"
p "#{square_of_vowels(array2)}: should be false"
p "#{square_of_vowels(array3) == "0-0"}: should be true"