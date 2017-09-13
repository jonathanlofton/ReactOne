require 'open-uri'
require 'parse'

def fetchLights()
    light = open('http://localhost/api/newdeveloper/lights/2')
    json = light.each_line {|line| p line.gsub('"', '')}
    json.parse
end 

fetchLights