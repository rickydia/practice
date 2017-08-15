#!/usr/bin/env python3

from random import randint


print("Hello! Welcome to rock, paper, scissors!")
while True:
    player = input("Please enter your choice of 'rock', 'paper', or 'scissors'. If you'd like to quit, enter 'quit':")
    if player != "rock" and player != "paper" and player != "scissors":
        if player == "quit":
            break
        continue
    rps = {1 : "rock", 2 : "paper", 3 : "scissors"}
    comp_choice = randint(1, 3)
    if player == rps[comp_choice]:
       print("We both chose %s\n\n" % player) 
    else:
        if player == "rock" and rps[comp_choice] != "paper":
            print("You won! You chose %s and I chose %s\n\n" % (player, rps[comp_choice]))
        elif player == "paper" and rps[comp_choice] != "scissors":
            print("You won! You chose %s and I chose %s\n\n" % (player, rps[comp_choice]))
        elif player == "scissors" and rps[comp_choice] != "rock":
            print("You won! You chose %s and I chose %s\n\n" % (player, rps[comp_choice]))
        else:
            print("You lost. You chose %s and I chose %s\n\n" % (player, rps[comp_choice]))
