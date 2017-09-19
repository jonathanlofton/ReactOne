require './binarytree'

include BinaryTree

$root = nil
%w{to be or not to be}.each do |word|
  if $root.nil?
    $root = Node.new(word)
  else
    $root.insert(Node.new(word))
  end
end

$root.each do |node|
  puts "#{node.word} (#{node.count})"
end

puts
puts "#{$root.size} words."
puts "#{$root.count_all} nodes."