class Node 
    attr_accessor :val, :right, :left 

    def initialize(val)
        @val = val
        @right = nil 
        @left = nil 
    end 
end 

def arr_to_bst(arr)
    return nil if arr.empty?

    mid = arr.length / 2 
    new_node = Node.new(arr[mid])
    
    new_node.left = arr_to_bst(arr[0...mid])
    new_node.right = arr_to_bst(arr[mid + 1.. -1])

    new_node
end

root = arr_to_bst([1,2,3,4,5,6,7,8,9,10])

def all_paths(root, arr = [])
  return [] if root == nil 

  arr << root.val unless root.val == nil
  
  if root.left == nil && root.right == nil 
    p arr 
    return arr
  end 

  return all_paths(root.left, arr), (all_paths(root.right, arr)) 
end 

p all_paths(root)