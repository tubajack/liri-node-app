# liri-node-app

Node.JS assignment for the Coding Bootcamp at UT Austin. 

The LIRI bot is similar to the Iphone's SIRI. 
The biggest difference is that SIRI is a Speech Interpretation and Recognition Interface. 
LIRI is a Language Interpretation and Recognition Interface. 

![alt text](SIRI.jpg)

## Creating the Application
When I first saw the specifications of how to complete this project, I thought that this is definitely going to be challenging. 
Making matters even more challenging was the fact that my instructor decided to push the due date up a week. 
He was later willing to move it back a week because the other class got another week to do the project. 

After getting some good examples in class, and getting good advice from my instructor, I decided to start tackling the project. 
Before starting, I planned out the project using a project board. This board enabled me to split the project into smaller, more manageable tasks. 

**First Issue**: The first issue that I ran into on this project was making sure that I got all of the right files downloaded into the program. 

*Resolved*: I read through the directions for this several times before downloading everything that I needed. 

**Second Issue**: I needed several APIs to make this project work. I was able to get all of the APIs that I needed except for the BandsinTown API. 
I had to email the customer support department there to get the API that I needed. 
They don't just give anyone the API. They asked me for verification and for my instructor's verification. 

*Resolved*: It took me a day to realize that there was an API for Bands in Town already provided. My instructor pointed that out to me **after** I got my own
API from BandsinTown.  


## Functions in the liri.js Application
Since I will not be able to deploy this site to github pages, it is important that I have a good readMe page in order to ensure that this project works. 
There are four functions: BandsInTown, Spotify, MovieAPI, and Do What it Says. Each of these functions will be discussed in further detail. 

### Bands in Town
To run the BandsInTown application, I typed in concert-this for the user Action. 

The first challenge, discussed earlier was getting the API for the band. After talking with my instructor, I realized that Trilogy had provided the API for me, and that I did not need to go through all of the trouble to get the application. BandsInTown was willing to give me an API after talking with customer service for a day. 

Let's say I type in a popular band like *twenty one pilots*. Another challenge that I ran into was how do I account for a band name with multiple words. Originally, I had some code accounting for this at the header of the program. To fix this problem (and get the minimum viable product. (I still didn't figure out not to repeat myself)), I had to put this code in the BandsInTown, Spotify, and MovieAPI functions. 

![alt text](BandsInTown-MultipleWordInput.jpg)

### Spotify

### MovieAPI

### Do What it Says