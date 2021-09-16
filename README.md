# Solutions for practical task by TeleSoftas
This document contains solutions for the tasks and/or any other information that might be useful for the review process.
## Task 1. Meditation Timer & Log App
I haven't really used the app a lot, just downloaded it and tried to click through it as much as possible. There could be suggestions regarding the function of the app, but I didn't try to actually use it.

I used the app on an Android 10 device with MIUI 12 
### Suggestions
Locations where the app could be improved:
- Design. Meditation in my mind associates with minimalism. I think a design is very important for this type of app and minimalism associates with calmness for me. Here are some more specific points regarding the design:
    - Swipping left/right in various scenarios:
        - Swipe left to go back to session settings
        - Swipe right to finish session
        - Swipe left to leave settings page
        - Etc.
    - Combining Goal and Profile pages
        - There is a link to Goal page in the Profile page and also the same link is present in the main screen
    - Two columns of circle buttons
        - Timer selection in this manner seems odd. Not sure whether i have a better idea for that. Maybe just have only the custom option
        - For some of the sounds there is scrolling which could be avoided if space would be used more effitiently
        - Maybe I'm just not a fan of circles :D
    - Maybe there could be an option for simple/advanced flow in the settings where the simple one would have less of the options present
- On a phone with phone wide dark theme, the colors of the app are very odd. Selecting a night theme seems to invert some of the colors resulting in a disturbing combination
- Activity diagram
    - It rotates to landscape automatically which seems strange. I get the idea, that it is better to see the graph in landscape, but I would expect to have both options
    - The landscape view is available only on one side, it should be possible to have landscape when the phone is tilted to either side
- English
    - Descriptions used in the tooltips in settings and other locations could be reviewed for styling
    - There are some grammatical mistakes as well (capital letters in the middle of a sentence, the/a usage)
### Bugs
Here are two random bugs that I have found :)
- Bug 1
    - Click 'New Session'
    - Make a change in settings
    - Click 'Save to Presets'
    - Enter a title and click 'Done'
    - Click 'Save to Presets'
    - Go back to main screen
    - Click 'Load Meditation'
    - Result: preset is not there
- Bug 2
    - Click 'New Session'
    - Click 'Duration' for editing
    - Click 'Custom'
    - Scroll minutes to 59
    - Scroll minutes to 0
    - Result: 'Done' button is not visible

## Script Tasks (Task 2 and Task 3)
### Tools
For the following tasks I have decided to use the Cypress framework. Some of the reasoning for this decision:
- I wanted to use a JavaScript framework because I want to gain more experience with this language
- I have never used Cypress before and this was a great opportunity to get familiar with it
- I have some experience with Protractor framework, but wanted to be able to compare it with Cypress
- I wanted to learn something new
### Issues
I am more used to writing e2e tests using C# and Selenium and Javascript acts a bit differently. Moreover Cypress itself seems to be a bit different compared to Protractor. It might be my limited knowledge of Javascript that led me to the following issues:
- A value cannot be returned from a method for further use
    - I found a workaround to use Cypres Aliases for storing a value which can be seen in use for both task 2 and task 3
- I have more experience with POM and am more used to it
    - In Cypress it is sometimes hard to implement a POM because separation between POM methods and assertions for tests sometimes is not possible
 ~~TODO write a different implementation of the scripts avoiding POM~~
- Cypress does not natively support Iframes
    - I found a solution which uses custom Cypress Commands but it was not a stable one
    - I found another solution which uses custom functions and this seems to be working consistently
### Task 2
Some of the previously mentioned issues arose because of how the task is given. Following the task word by word allows to create a script that has no assertions which in my understanding is a bad test. In the original implementation i have added an assert of what was entered to the search field, but asserted the value to be not empty and for it to be a number which seems strange. Original solution can be launched with the following command:
```
npm run task2
```

~~TODO In the alternative implementation of task 2 I will assume that that there are always 9 images displayed in the iframe and assert the count to be equal to 9. With this assumption I can also assert the search bar input to be equal to 9 as well.~~

Alternative implementation asserts that the count of images is equal to 9. It get's the actual count and passes the value to the search bar and also asserts that it was entered to the search bar. Alternative solution can be launched with the following command:
```
npm run task2-alt
```

### Task 3 
The last point of this task (...read and print the text...) in my mind translates, that the value has to be stored in a variable after reading and printed from that variable. Here I again face the issue that value cannot be passed further on in Cypress. I end up with storing the value internally which does not seem to be a good usage of the framework. Also i do not assert the value as this is not asked in the task. Original solution can be launched with the following command:
```
npm run task3
```

~~TODO In the alternative implementation of task 3 I will not store the value but just get it and print it. I will assert the value so that the test has an assert at the end. I will try to find a way to hide the errors that can be seen in the console when visiting the page as they are not relevant for the provided test case and just look not nice and misleading.~~

In the alternative implementation the value is read and stored in **this context** although this needs arrow function to be replaced by regular functions. Assertion of the text was not implemented. Hiding of errors in the console was not implemented as an old solution that I have found was deprecated since Cypress version 6. However the errors might be due to my home network setup (Pi-hole is blocking some domains...). Alternative solution can be launched with the following command:
```
npm run task3-alt
```

## Task 4
### Setup
For this task the following setup was used:
- Appium
- Android Studio (for virtual device)
    - Android version: 8
- WebdriverIO
- Mocha 
- Chai 

To be able to run the tests, an Appium server needs to be running and a virtual device (name can be found in the configuration) needs to be running. Then the test can be launched with the following command:
```
npm run task4
```
### Scenario
The scenario can be split into two parts, one for the tutorial in the app and the second for the scenario provided in the gif.

Scenario for the tutorial:
- First screen
    - Given: the app is in the first screen (assert text)
    - When: the button is clicked
    - Then: wait a bit (1000 ms) for screen to change (The wait was used because the buttons are the same elements on all screens and i did not find a better way of ensuring that the screen has changed. The waiting time could be lowered, but this still is not an ideal solution)
- 2nd/3rd/4th screens
    - Basically repeat the same just assert different texts

Scenario from the gif:
- Click on first news provider
    - Given: news provider list is present
    - When: the first news provider is clicked
    - Then: the section title should contain the news provider name
- Add first news article to favorites
    - Given: the article list is present
    - When: the first article is marked as a favorite
    - Then: the first article should be seen marked as favorite (For some reason I am unable to complete this part...)
- Open favorites
    - Given: the favorites button is present
    - When: favorites button is clicked
    - Then: the section title should contain the word 'Favorites'
### Issues
Here are some of the issues i have faced when trying to solve this task:
- As mentioned in the scenario, I was unable to make an assert, that the favorite button is checked
- At first I wanted to run this solution on my physical device which has Android version 10. When i tried to use a virtual device with the same version, I was unable to make it work, lowering the version to 8 made everything work smoothly
- I tried implementing POM for this solution, but was unable to do that. This is probably again due to limited knowledge of Javascript/Mocha and the specifics of how to properly configure everything together. I have left the selectors within the tests fully knowing that this is not the prefered way of structuring a test project
- I had some difficulties with understanding appActivity/appWaitActivity capabilities and passing the correct values for them for the app to work properly when the tests are running. Also while running during the tests the app has the tutorial section, but when debugging, once the tutorial is finished, it doesn't appear again when the app is relaunched