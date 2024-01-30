# Sample Python Program for IntelliSense Testing

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."


# Create an instance of the Person class
john = Person("John Doe", 25)

# Accessing properties with IntelliSense
print(john.name)  # As you type "john.", you should see IntelliSense suggestions for "name" and "age"

# Calling methods with IntelliSense
greeting = john.greet()  # As you type "john.greet()", you should see IntelliSense suggestion for "greet"
print(greeting)

