<<<<<<< HEAD
#!/usr/bin/env python3

print("Hello, World")

spam = 4
print(spam)

string_1 = "Camelot"
string_2 = "place"

print("Let's not go to %s. 'Tis a silly %s." % (string_1, string_2))

def is_prime(x):
    for n in range(2, x-1):
        if (x / n) - int(x / n) == 0:
            return False

    if x == 0 or x == 1:
        return False
    else:
        return True

if is_prime(5) == False:
    print("damn")

else:
    print("it dumb")

def reverse(text):
    result = ""
    i = 0
    while i < len(text):
        result += text[len(text) - 1 - i]
        i += 1
    return result

print(reverse("abcd"))


#to actually run the program, type "python3 hello.py"
=======
#!/usr/bin/env python3

print("Hello, World")

spam = 4
print(spam)

string_1 = "Camelot"
string_2 = "place"

print("Let's not go to %s. 'Tis a silly %s." % (string_1, string_2))

def is_prime(x):
    for n in range(2, x-1):
        if (x / n) - int(x / n) == 0:
            return False

    if x == 0 or x == 1:
        return False
    else:
        return True

if is_prime(5) == False:
    print("damn")

else:
    print("it dumb")

def reverse(text):
    result = ""
    i = 0
    while i < len(text):
        result += text[len(text) - 1 - i]
        i += 1
    return result

print(reverse("abcd"))


#to actually run the program, type "python3 hello.py"
>>>>>>> e6613327a263ff4cc0eb6ea7baf9fa0b8489ea47
