
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
p root
def breadth_first_search(root1)
    queue = []
    queue << root1
    while !queue.empty?
        node = queue.shift 
        p node.val
        queue << node.left if node.left 
        queue << node.right if node.right 
    end 
end 

breadth_first_search(root)