module BinaryTree
  class Node
    attr_reader :word, :count, :left, :right

    include Enumerable

    def initialize(word)
      @word, @count = word, 1
    end

    def size
      size = 1
      size += @left.size  unless left.nil?
      size += @right.size unless right.nil?
      size
    end

    def insert(another_one)
      case @word <=> another_one.word
        when 1
          insert_into(:left, another_one)
        when 0
          @count += 1
        when -1
          insert_into(:right, another_one)
      end
    end

    def each
      @left.each {|node| yield node } unless @left.nil?
      yield self
      @right.each {|node| yield node } unless @right.nil?
    end

    def words
      entries.map {|e| e.word }
    end

    def count_all
      self.map { |node| node.count }.reduce(:+)
    end

    def valid_bst?(root)
      nodes_and_bounds = []
      nodes_and_bounds.push([root, -Float::INFINITY, Float::INFINITY])
      
      while !nodes_and_bounds.empty?
        node, low_bound, high_bound = nodes_and_bounds.pop

        if (node.value <= low_bound) || (node.value >= high_bound)
          return false 
        end 
      end 
      
    end 

    # interview cake
    def is_balanced(tree_root)
      return true if !tree_root

      depths = [] # we short-circuit as sson as find more than one

      # we'll treat this array as a stack taht will store pairs
      node = []
      nodes.push([tree_root, 0])

      while !nodes.empty?
        
        # pop a node and its depth from the top of our stack
        node, depth = nodes.pop 

        # case: we found a leaf
        if !node.left && !node.right 
          
          # we only care if it's a new depth 
          if !depths.include? depth 
            depths.push(depth)

            if (depths.length > 2) || \ 
              (depths.length == 2 && (depths[0] - depths[1]).abs > 1)
              return false 
            end 
          end 

        else 
          if node.left 
            nodes.push([node.left, depth + 1])
          end 
          if node.right 
            nodes.push([node.right, depth + 1])
          end 
        end 
      end 

      return true 

    end 

    def insert_into(destination, another_one)
      var = destination.to_s
      eval(%Q{
        if @#{var}.nil?
          @#{var} = another_one
        else
          @#{var}.insert(another_one)
        end
      })
    end

    protected :insert_into
  end
end