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

def route_between_bfs(root, nodea, nodeb)
    queue = []
    queue << root 
    nodea_found = false 
    nodeb_found = false 
    while !queue.empty?
        node = queue.shift 
        queue << node.left if node.left 
        queue << node.right if node.right
        nodea_found = true if node.val == nodea
        nodeb_found = true if node.val == nodeb 
    end 
    p nodea_found && nodeb_found
end 

route_between_bfs(root, 6, 1)