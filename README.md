# Machine Test Submission

This repository contains my solutions for the machine test.

---

## 1. Angular Paginated Table

- Implemented a user table using Angular.
- Data is displayed with pagination and page size selection (5, 10, 20).
- Page navigation updates the displayed data dynamically.
- Due to CORS issues with the provided API, I used mock data while maintaining the same pagination logic.

### How to run:

cd angular-pagination  
npm install  
ng serve  

---

## 2. Debounce Function

- Implemented a debounce function using `setTimeout` and `clearTimeout`.
- Ensures the function is executed only after a delay when calls stop.

---

## 3. Missing Number

- Used a Set-based approach to find the missing number.
- Iterated from 1 to n+1 to find the first missing value.

---

## 4. DOM Manipulation

- Added a button to dynamically add a new user ("David") to the list.
- Added functionality to remove the first user from the list.
- Used basic DOM methods like `createElement`, `appendChild`, and `removeChild`.

---

## 5. Form Validation

- Validated that username and password fields are not empty.
- Displayed error message if validation fails.
- Logged success message when validation passes.

---

## Notes

- Focused on simple and clean implementation.
- Ensured all features are working as expected.