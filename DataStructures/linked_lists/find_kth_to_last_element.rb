class LinkedNode 

  attr_accessor :next, :prev, :value
  
  def initialize(value)
    @value = value 
    @next = nil
    @prev = nil 
  end 
end 

sixth_node = LinkedNode.new(6)
fifth_node = LinkedNode.new(5)
fourth_node = LinkedNode.new(4)
third_node = LinkedNode.new(3)
second_node = LinkedNode.new(2)
first_node = LinkedNode.new(1)

first_node.next = second_node
second_node.next = third_node
third_node.next = fourth_node
fourth_node.next = fifth_node
fifth_node.next = sixth_node

def find_kth_element(head, k)
  head1 = head 
  head2 = head 
  k.times do 
    head1 = head1.next 
  end 

  while head1 
    head1 = head1.next 
    head2 = head2.next
  end 

  p head2.value
end 

# find_kth_element(first_node, 3)

def linked_list_palindrome?(first_node)
  
end 