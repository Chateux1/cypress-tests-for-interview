# Solutions for practical task by TeleSoftas
This document contains solutions for the tasks and/or any other information that might be useful for the review process.
## Task 1
TODO
## Script task (task 2 and task 3)
### Tools
For the following tasks I have decided to use the Cypress framework. Some of the reasoning for this decision:
- I wanted to use a JavaScript framework because I want to gain more experience with this language
- I have never used Cypress before and this was a great opportunity to get familiar with it
- I have some experience with Protractor framework, but wanted to be able to compare it with Cypress
- I wanted to learn something new
### Issues
I am more used to writing e2e tests using C# and Selenium and Javascript acts a bit differently. Moreover Cypress itself seems to be a bit different compared to Protractor. It might be my limited knowledge of Javascript that led me to the following issues:
- A value cannot be returned from a method for further use
    - I found a workaround for storing a value with can be seen in use in both task 2 and task 3
- I have more experience with POM and am used to it
    - In Cypress it is sometimes hard to implement a POM as separation between POM methods and assertions for tests is not possible
    - TODO write a different implementation of the scripts avoid POM
- Cypress does not natively support Iframes
    - I found a solution which uses custom Cypress Commands but it was not a stable one
    - I found another solution with uses custom functions and this seems to be working consistently
### Task 2
Some of the previously mentioned issues arose because of how the task is given. Following the task word by word allows to create a script that has no assertions which in my understanding is a bad test. In the original implementation i have added an assert of what was entered to the search field, but asserted the value to be not empty and for it to be a number which seems strange.

TODO In the alternative implementation of task 2 I will assume that that there are always 9 images displayed in the iframe and assert the count to be equal to 9. With this assumption I can also assert the search bar input to be equal to 9 as well.
### Task 3 
The last point of this task (...read and print the text...) in my mind translates, that the value has to be stored in a variable after reading and printed from that variable. Here I again face the issue that value cannot be passed further on in Cypress. I end up with storing the value internally which does not seem to be a good usage of the framework. Also i do not assert the value as this is not asked in the task

TODO In the alternative implementation of task 3 I will not store the value but just get it and print it. I will assert the value for the test to have an assert at the end. I will try to find a way to hide the errors that can be seen in the console when visiting the page as they are not relevant for the provided test case and just look not nice and misleading.
## Extra task
TODO
