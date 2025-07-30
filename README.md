
# UC Hotel
A full-featured Restaurant Management System designed to simplify operations for both restaurant owners and customers. This web-based solution provides a seamless experience with dedicated interfaces for Admins (owners) and Customers.




## Usage

## 👤 As a Customer:

1.Visit the website home page.

2.Sign up or log in to your account.

3.Browse the menu and explore available dishes.

4.Book a table for dine-in (based on availability).

5.Place your order from the menu.

6.Make payment for your order using the integrated payment system.

## 🔐 As an Admin/Owner:
1.Log in using your admin credentials.

2.Access the admin dashboard to view key metrics.

3.Manage tables: View table statuses (Available, Booked, Cleaning).

5.Manage orders:Track orders by table number and customer.

6.Manage menu: Add new dishes with price, category, description, and availability.Edit or delete existing dishes.

7.View all payments and track revenue.

## ✨ Features

- Admin & Customer login system
- Interactive admin dashboard
- Real-time table status (Available, Booked, Cleaning)
- Order management linked to tables
- Full dish (menu) management: Add, Edit, Delete
- Payment tracking and history
- Customer table booking system
- Responsive menu browsing
- Online order placement and payment





## 💻 Tech Stack

- **Frontend**: React.js
- **State Management**: Redux
- **Backend**: Spring Boot 
- **API Handling**: Axios
- **Authentication**: JWT 
- **Database**:  MySQL 
- **Styling**: CSS 



## Run Locally

#### 1. Setup Project Locally 

Clone the project

```vash
  git clone https://github.com/hp2604/UC_Hotel.git
```
SetUp Database

```bash 
Run dbfile.sql  in sql workspace.
```

Go to the project directory

```
  cd UC_Hotel
```
#### 2. Front End 

Install dependencies

```bash
  npm install
```

Run FrontEnd
```bash
npm run dev
```

#### 3. Back End 
Change UserName and Password with your Username and Password in given location
```bash
backend/UCHotel/src/main/resources
/application.properties
```
Start Backend Server


Run File ``` backend/UCHotel/src/main/java/com/UCHotel/UcHotelApplication.java``` file in your java IDE. 







## Demo



## Screenshots
<img width="1195" height="424" alt="AddDish" src="https://github.com/user-attachments/assets/1257144b-1d22-4ab4-82c8-d96896a1a8a3" />
<img width="1241" height="779" alt="dishManagment" src="https://github.com/user-attachments/assets/4e42228b-1d46-43cf-af9e-28ae12811479" />
<img width="1156" height="434" alt="editDish" src="https://github.com/user-attachments/assets/2ae3d536-60e9-45e1-a266-e1651502a82a" />
<img width="731" height="660" alt="login" src="https://github.com/user-attachments/assets/fb75ebb3-8a32-446a-a235-45afa654b0c2" />
<img width="1232" height="698" alt="MainCourseDish" src="https://github.com/user-attachments/assets/d02d9dc3-2d7a-41f1-af64-d3833076c4ef" />


## 🚧 Project Progress

- ✅ Admin login and dashboard implemented
- ✅ Dish Management(Add Dish ,Edit Dish,Delete Dish) completed


- ⏳ Customer Website (in progress)


## ⏭️ Next Phase of Development

The Dish Management module has been successfully completed. The next set of features currently under development include:

- Website For Customer 

Customer Website for book table, order menu.

-  Table Management  
  View booked, available, and cleaning tables in real-time.

-  Order Management  
  Link customer orders to specific tables and track order flow.

- Payment Module  
  Allow customers to make payments and enable admin to track them.


Each phase is being developed with a focus on performance, scalability, and clean UI.
