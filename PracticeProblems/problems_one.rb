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

