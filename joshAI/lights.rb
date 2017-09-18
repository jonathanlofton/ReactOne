require 'open-uri'
require 'json'

class LightState

    # attr_reader :lights
    
    def initialize()
        @lights = {}
        @user_account = "newdeveloper"
    end 

    # will take the light, and grab specific information from it
    # put it into a hash and then set that data to the value of the 
    # name of the light in the state 
    def light_info(light)
        hash = {}
        hash[:name] = light["name"]
        hash[:on] = light["state"]["on"]
        hash[:brightness] = (light["state"]["bri"] / 2.54).round
        hash[:id] = light["modelid"]
        @lights[hash[:name]] = hash
    end 

    def fetch_all_lights()
        url = "http://localhost/api/#{@user_account}"
        # open(url).read will show the response from the api call
        # and show all the data encapsulated as a string
        light = open(url).read
        # JSON.parse(light) parses the string and creates an actual json or "hash"
        # to allow for easy access to particular portions of the response
        fetched_lights = JSON.parse(light)
        
        
        i = 1
        # loops through the fetched_lights 
        # and adds them to the state until 
        # there are none left
        loop do  
            light = fetched_lights["lights"][i.to_s]
            light == nil ? break : light_info(light)
            i += 1
        end 
    end 

    # will see what changes to the light happened specifically 
    # and print out the name of the light and the attribute 
    # that had changed
    def changes_to_light(current_light, previous_light)
        brightness = {}
        on = {}
        return if previous_light == nil 
        if current_light[:on] != previous_light[:on]
            on["name"] = current_light[:name]
            on["on"] = current_light[:on]
            p on
        end 
        if current_light[:brightness] != previous_light[:brightness]
            brightness["name"] = current_light[:name]
            brightness["brightness"] = current_light[:brightness]
            p brightness
        end 
    end 

    
    def listen_for_changes() 
        previous_light = {}
        
        loop do 
            sleep(0.5)
            # "listens" by fetching all lights 
            # from the api every 1/2 second
            fetch_all_lights

            # loops through the updated lights 
            # and checks if there has been any changes
            @lights.values.each do |light|

                if light != previous_light[light[:name]]
                    changes_to_light(light, previous_light[light[:name]])
                end 

                previous_light[light[:name]] = light
            end 

        end 
    end 

    # Why did you use a run method? 
    # its nice to have the run function
    # so I can 
    def run 
        # fetch and print all lights
        p "(defaults to 'newdeveloper') what is your Phillips Hues user name? "
        account = gets.strip
        @user_account = gets.strip unless account == ""
        self.fetch_all_lights
        p @lights
        
        # loop and listen for changes
        self.listen_for_changes
    end 
end 

if __FILE__ == $PROGRAM_NAME
    watching_lights = LightState.new 
    watching_lights.run
end 
