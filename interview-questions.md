# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
To fix this you would go to the model called Student and add the association `belongs_to : Cohort`

Researched answer:
To create a new instance of a student we would need to assign it to a cohort. 
charlie = Cohort.first
charlie.students.create name: "halie"
=> Student id: 1, name: "halie", cohort_id: 1
the foreign key would show up on the instances of the student model and would read `cohort_id:`

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes Show, Edit, Update, and Destroy should always be passed params. Otherwise, the server will not have sufficient information to process accurately. 

Researched answer:
Get - Show, Edit (Retrieves a specific resource, Renders a form to edit an existing resource)
Put/Patch - Update (Updates an existing resource based on submitted data)
Delete - Destroy (Deletes a specific resource)


3. Name three rails generator commands. What is created by each?

Your answer:
rails g resource - Creates a model, controller and route
rails g migration - Creates a migration path that allows you to update the structure of your model
rails g model - Creates a model 


Researched answer:
rails g controller - Creates a controller 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
    Controller Method: index
    Action: This would retrieve/display the entire collection of students. 

action: "POST" location: /students
    Controller Method: create
    Action: This would create a new student based on the submitted data 

action: "GET" location: /students/new
    Controller Method: new
    Action: This would rentder a form to create a new student

action: "GET" location: /students/2
    Controller Method: show
    Action: This would retrieve and display the details of the student with an ID of 2

action: "GET" location: /students/2/edit
    Controller Method: edit
    Action: This would rendering a form to edit the details of the student with an ID of 2

action: "PATCH" location: /students/2
    Controller Method: update
    Action: This would update the details of the student with an ID of 2 based on the submitted data

action: "DELETE" location: /students/2
    Controller Method: destroy
    Action: This would delete the student with an ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

    1. As a user, I want to be able to create a new task and add it to my to-do list
    2. As a user, I want to be able to view my to-do list and see all the tasks to be completed
    3. As a user, I want to be able to make a task as complete once i've finished it.
    4. As a user, I want to be able to edit my task if there are any changes 
    5. As a user, I want to be able to delete a task from the list
    6. As a user, I want to be able to sort my tasks by level of importance
    7. As a user, I want to be able to organize my tasks by category 
    8. As a user, I want to be able to set due dates for my tasks with an alert reminder
    9. As a user, I want to be able to filter my tasks 
    10. As a user, I want to be able to track my progress 