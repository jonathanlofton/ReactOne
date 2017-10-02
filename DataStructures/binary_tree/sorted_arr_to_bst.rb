
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

tree = arr_to_bst([1,2,3,4,5,6])
p tree

def bst_traversal(root)
    return if root == nil 

    bst_traversal(root.left)
    p root.val
    bst_traversal(root.right)
end 

bst_traversal(tree)
