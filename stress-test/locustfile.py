from locust import HttpUser, TaskSet, task, between

class UserBehavior(TaskSet):
    @task
    def load_home_page(self):
        self.client.get("/")

class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    wait_time = between(1, 5)  # Wait time between tasks

# To run the test:
# locust -f locustfile.py --host=http://localhost:5173
