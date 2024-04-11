# mdn webdocs js sandbox
I need js foundation for 
# 0st 
this directory is a sandbox enviornement for the turotial here https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
 - going over what is js and leanring basics 
# 1st 
this direcotry  contians lessons from JS first steps . https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash 
## guessNum
// before you start to code think about the problem your solving logicly like a programer

/*task
Let's imagine your boss has given you the following brief for creating this game:

    I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, 
    the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed.
     The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.
 */ 
// 1 generate rand number
//2 record guess  player is on starting w 1 
//3 have input feild  for player to enter number and guess button
// 4 record guess somewhere and display previous guesses
// 5 check if its right or wrong 
/* 6 if correct 
 -display msg saying they are correct 
 - stop player from being able to guess
 - display button to restart game               
  */
/* 7 if wrong   and has turn left    
-display msg saying they are wrong and if guess was to high or to low 
-allow more guesses 
-store 1 less turn 
-        */
/* 8 if wrong   and has 0 turn left         
- display game over 
- user cannot guess again
-display restart game button   */