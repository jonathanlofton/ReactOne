require 'open-uri'
require 'json'

class LightState

    attr_reader :program
    
    def initialize()
        @program = true 
        @lights = {}
    end 

    def light_info(light)
        hash = {}
        hash[:name] = light["name"]
        hash[:on] = light["state"]["on"]
        hash[:brightness] = (light["state"]["bri"] / 2.54).round
        hash[:id] = light["modelid"]
        @lights[hash[:name]] = hash
    end 

    def fetch_all_lights()
        light = open("http://localhost/api/newdeveloper").read
        result = JSON.parse(light)
        
        i = 1
        loop do  
            light = result["lights"][i.to_s]
            light == nil ? break : light_info(light)
            i += 1
        end 
    end 

    def changes_to_light(current_light, previous_light)
        brightness, on = {}
        return if previous_light == nil 
        if current_light[:on] != previous_light[:on]
            hash["name"] = current_light[:name]
            hash["on"] = current_light[:on]
            p hash
        end 
        if current_light[:brightness] != previous_light[:brightness]
            brightness["name"] = current_light[:name]
            brightness["brightness"] = current_light[:brightness]
            p brightness
        end 
    end 

    
    def updated_light_info() 
        previous_light = {}
        
        loop do 
            sleep(1)
            fetch_all_lights
            @lights.values.each do |light|

                if light != previous_light[light[:name]]
                    changes_to_light(light, previous_light[light[:name]])
                end 
                previous_light[light[:name]] = light
            end 

        end 
    end 

    

    def run 
        # fetch and print all lights
        self.fetch_all_lights
        p @lights

        # If light state changes it should print again
        while self.program
            sleep(3)
            self.updated_light_info
        end 
    end 
end 

if __FILE__ == $PROGRAM_NAME
    mainObject = LightState.new 
    mainObject.run
end 
