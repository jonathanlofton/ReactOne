Hey Johnathan- It was great talking to you today and hearing about you passion for software engineering (and for the mountains in Colorado). I spoke to one of our co-founders and they agreed that they would like to move you along to our technical challenge. As I mentioned on the phone this challenge is meant for you to see the types of problems we work on and it is also a good way for us to see how you approach problems. This challenge should take about an hour.

The coding challenge is below. Let me know if you have any questions. Thanks!

::::::::::

The challenge is to create a program which implements a simple integration with the Philips Hue platform. It should be a simple terminal based program that will print out text based on the state of the lights. When the program starts up, it should print out all lights and their state (we will restrict to only whether the lights are on/off, brightness, name, and ID). The output should be formatted as JSON in the format of the following example:

[ 
{ 
"name":"Red Lamp", 
"id":"1", 
"on":true, 
"brightness":45 
}, 
{ 
"name":"Green Lamp", 
"id":"2", 
"on":false, 
"brightness":100 
} 
]

Your output does not need to be pretty printed like this, it can be a single line, however printing tab and newline formattedJSON will probably make debugging easier for yourself. The “on” property is simply a boolean of whether the light is on or not. The “brightness” property should be an integer (from 0 to 100) representing the % brightness of the light.

After printing out the initial state, your program should print out any changes in the lights’ state. For example, if the Red Lamp turns off, you should print:

{ 
"id":"1", 
"on":false 
}

If the Green Lamp is then turned on, and dimmed to 75%, you would print two changes:

{ 
"id":"2", 
"on":true 
} 
{ 
"id":"2", 
"brightness":75 
}

If you don't have your own Philips Hue hardware, there are some emulators out there. We recommend using this: https://www.npmjs.com/package/hue-simulator.

We are purposefully not providing too much more information to you. Part of the challenge will be finding and figuring out the documentation for the Philips Hue API since searching for this stuff is a real part of our job. It should be pretty easily accessible. Try to think through edge cases and implementing this in a real world application.

You are free to choose the language you implement this in. All of our drivers are written in C++, and so this is a logical choice, however there can be a fair amount of effort involved in bootstrapping a project to the point where this is easy to do. Even with modern versions of the standard library, you would probably have to pull other libraries in to implement this. Other languages like Python might prove much simpler, but it is totally up to you. You are free to use any libraries you wish (for JSON, networking, etc..), unless they are targeted specifically to the Philips Hue API. Please make sure the code runs on Unix OS (linux or mac). Otherwise, make sure to consider edge cases and think through how the system will perform if various real-life issues arise.

I think that’s all! I would expect to see whatever source code you end up with for your implementation in the end, and hopefully be able to run an executable on my own machine to test it. If you have any questions, or pieces are unclear feel free to ask. Also feel free to ask for help if you get stuck at any point.

My email is scotty@josh.ai, if you have any questions or when you complete the challenge, please send me a response on that email.

Thanks!

