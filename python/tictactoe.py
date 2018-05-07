#!/usr/bin/env python3

from random import randint

def printBoard(board):
    index = 0
    for x in range(0,3):
        print(board[index] + " | " + board[index + 1] + " | " + board[index + 2])
        if x != 2:
            print("---------")
        index += 3 

def checkCat(board):
    for x in range(0,9):
        if str(x) != board[x]:
            continue
        else:
            break
    else:
        print("Cat's game! We tie.")
        return True



def checkIfWinner(board):
    # Checks horizontal winners
    for x in range(0,3):
        if board[x * 3] == board[x * 3 + 1] and board[x * 3 + 1] == board[x * 3 + 2]:
            if board[x * 3] == 'X':
                printBoard(board)
                print("\nYou win!")
            else:
                printBoard(board)
                print("\nSorry, you lost.")
            return True
    # Checks vertical winners
    for y in range(0,3):
        if board[y] == board[y + 3] and board[y + 3] == board[y + 6]:
            if board[y] == 'X':
                printBoard(board)
                print("\nYou win!")
            else:
                printBoard(board)
                print("\nSorry, you lost.")
            return True
    # Checks diagonal winners
    if board[0] == board[4] and board[4] == board[8]:
        if board[0] == 'X':
            printBoard(board)
            print("\nYou win!")
        else:
            printBoard(board)
            print("\nSorry, you lost.")
        return True
    elif board[2] == board[4] and board[4] == board[6]:
        if board[2] == 'X':
            printBoard(board)
            print("\nYou win!")
        else:
            printBoard(board)
            print("\nSorry, you lost.")
        return True
     
    return False


def almostWinner(board, char):
    for x in range(0,3):
        if board[x * 3] == char and board[x * 3 + 1] == char:
            if board[x * 3 + 2] == str(x * 3 + 2):
                return (x * 3 + 2)
        elif board[x * 3 + 1] == char and board[x * 3 + 2] == char:
            if board[x * 3] == str(x * 3):
                return (x * 3)
        elif board[x * 3] == char and board[x * 3 + 2] == char:
            if board[x * 3 + 1] == str(x * 3 + 1):
                return (x * 3 + 1)

    for y in range(0,3):
        if board[y] == char and board[y + 3] == char:
            if board[y + 6] == str(y + 6):
                return (y + 6)
        elif board[y + 3] == char and board[y + 6] == char:
            if board[y] == str(y):
                return y
        elif board[y] == char and board[y + 6] == char:
            if board[y + 3] == str(y + 3):
                return (y + 3)

    if board[0] == char and board[4] == char:
        if board[8] == '8':
            return 8
    elif board[4] == char and board[8] == char:
        if board[0] == '0':
            return 0
    elif board[0] == char and board[8] == char:
        if board[4] == '4':
            return 4
    elif board[2] == char and board[4] == char:
        if board[6] == '6':
            return 6
    elif board[4] == char and board[6] == char:
        if board[2] == '2':
            return 2
    elif board[2] == char and board[6] == char:
        if board[4] == '4':
            return 4

    return -1
                    

def playGameEasy():
    board = ['0','1','2','3','4','5','6','7','8']
    printBoard(board)

    winner = False

    while winner == False:
        location = input("\nPlease enter your desired location of play: ")
        if location in board:
            index = board.index(location)
            board.remove(location)
            board.insert(index, 'X')
            winner = checkIfWinner(board)
            if winner == True:
                break
            cat = checkCat(board)
            if cat == True:
                break
        else:
            continue

        computerChose = False
        while computerChose == False:
            compLoc = randint(0, 8)
            try:
                if board.index(str(compLoc)) == compLoc:
                    board.remove(str(compLoc))
                    board.insert(compLoc, 'O')
                    print("The computer chose location %s" % compLoc)
                    winner = checkIfWinner(board)
                    if winner == True:
                        break
                    cat = checkCat(board)
                    if cat == True:
                        break
                    computerChose = True

            except ValueError:
                pass

        printBoard(board)


def playGameHard():
    board = ['0','1','2','3','4','5','6','7','8']
    printBoard(board)

    winner = False

    while winner == False:
        location = input("\nPlease enter your desired location of play: ")
        if location in board:
            index = board.index(location)
            board.remove(location)
            board.insert(index, 'X')
            winner = checkIfWinner(board)
            if winner == True:
                break
            cat = checkCat(board)
            if cat == True:
                break
        else:
            continue
            
        computerChose = False
        while computerChose == False:
            compLoc = almostWinner(board, 'O')
            if compLoc != -1:
                board.remove(str(compLoc))
                board.insert(compLoc, 'O')
                print("The computer chose location %s" % compLoc)
                winner = checkIfWinner(board)
                if winner == True:
                    break
                cat = checkCat(board)
                if cat == True:
                    break
                computerChose = True 

            compLoc = almostWinner(board, 'X')
            if compLoc == -1:
                compLoc = randint(0, 8)
                try:
                    if board.index(str(compLoc)) == compLoc:
                        board.remove(str(compLoc))
                        board.insert(compLoc, 'O')
                        print("The computer chose location %s" % compLoc)
                        winner = checkIfWinner(board)
                        if winner == True:
                            break
                        cat = checkCat(board)
                        if cat == True:
                            break
                        computerChose = True

                except ValueError:
                    pass

            else:
                board.remove(str(compLoc))
                board.insert(compLoc, 'O')
                print("The computer chose location %s" % compLoc)
                winner = checkIfWinner(board)
                if winner == True:
                    break
                cat = checkCat(board)
                if cat == True:
                    break
                computerChose = True


        printBoard(board)





while True:
    game = input("Hello! Welcome to tic-tac-toe! To play, enter the index you'd like to place your 'X' in, as marked by the numbers seen on the board.\nPlease enter whether you'd like 'easy' or 'hard' mode: ")
    if game == "easy":
        playGameEasy()
        break
    elif game == "hard":
        playGameHard()
        break

