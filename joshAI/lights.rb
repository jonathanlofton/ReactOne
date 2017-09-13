require 'open-uri'
require 'json'



class LightState

    attr_reader :program
    
    def initialize()
        @program = true 
        @light1 = nil
    end 

    def compareState(current, previous)
        if current != previous 
            p current
        end 
    end 

    def light_info(light)
        hash = {}
        hash[:name] = light["name"]
        hash[:on] = light["state"]["on"]
        hash[:brightness] = (light["state"]["bri"] / 2.54).round
        hash[:id] = light["modelid"]
        p hash
    end 

    def print_all_lights()
        light = open("http://localhost/api/newdeveloper").read
        result = JSON.parse(light)
        
        i = 1
        loop do  
            light = result["lights"][i.to_s]
            light == nil ? break : light_info(light)
            i += 1
        end 
    end 
    
    def allLights(previous_result = nil) 

        current_light_state = {}
        previous_light_state = {}
        loop do 
            sleep(1)
            light = open("http://localhost/api/newdeveloper/lights/2").read
            result = JSON.parse(light)
            current_light_state[:on] = result["state"]["on"]
            current_light_state[:brightness] = result["state"]["bri"]
            current_light_state[:id] = result["modelid"]
            # name[:name] = result["name"]


            if current_light_state[:on] != previous_light_state[:on] 
                p current_light_state[:on]
            end 
            compareState(current_light_state[:brightness], previous_light_state[:brightness])

            previous_light_state[:on] = current_light_state[:on]
            previous_light_state[:brightness] = current_light_state[:brightness]
            previous_light_state[:id] = current_light_state[:id]
        end 
    end 

    

    def run 
        # print all lights when program starts
        # on / off, brightness, name, ID
        self.print_all_lights

        # If light state changes it should print again
        while self.program
            sleep(3)
            self.allLights
        end 
    end 
end 

if __FILE__ == $PROGRAM_NAME
    mainObject = LightState.new 
    mainObject.run
end 
