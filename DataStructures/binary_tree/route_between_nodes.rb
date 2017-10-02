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
    nodea_found && nodeb_found
end 

p "path between routes found? #{route_between_bfs(root, 6, 1)}"

class Link_node
    attr_accessor :val, :next

    def initialize(val)
        @val = val
        @next = nil
    end 
end 


def list_of_depths(root)
    queue = []
    queue << root 
    child_array = []
    child_array << root.val
    final_result = []
    while !queue.empty?
        final_result << linked_list(child_array)
        node = queue.shift 
        queue << node.left if node.left 
        queue << node.right if node.right
    end 
    final_result
end 

def linked_list(arr)
    head = Link_node.new(arr.shift)
    current_node = head 
    until arr.empty?
        current_node.next = Link_node.new(arr.shift)
        current_node = current_node.next     
    end 
    head
end 

def linked_each(link)
    current_node = link 
    while current_node
        p current_node.val 
        current_node = current_node.next 
    end 
end 

head = list_of_depths(root)
head2 = linked_list([1,2,3,4,5,6,7])
linked_each(head)
linked_each(head2)

p "list of depths: #{list_of_depths(root)}"
