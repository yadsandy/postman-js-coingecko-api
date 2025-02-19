# CoinGecko API Testing  

This project contains automated API tests for the **CoinGecko Simple Price API** endpoint. The tests validate functionality, error handling, performance, and data accuracy using **Postman, Newman, and JavaScript**.

---

## 🚀 **Project Overview**  

- **API Under Test**: `GET /simple/price?ids=ethereum&vs_currencies=usd`  
- **Automation Tools**: Postman, Newman  
- **CI/CD Integration**: GitHub 
- **Performance Testing**: Validates response time under 1 second  

---

## 📌 **Prerequisites**  

1. **Install Node.js** (if not installed)  
   - Download from: [https://nodejs.org/](https://nodejs.org/)  
   - Verify installation:  
     ```sh
     node -v
     npm -v
     ```
   
2. **Install Newman (Postman CLI Runner)**  
   ```sh
   npm install -g newman newman-reporter-htmlextra


## 📌 ** Test Execution & Reports **

1. **Run Command for test execution**  
   ```sh
    newman run coingecko.postman_collection.json -d test_cases.json --reporters cli -r htmlextra --reporter-htmlextra-export newman-report.html

   
2. **View test execution results**  
   ```sh
    start newman-report.html  # Windows
   

3. **Result Report screenshot**
   ![Result](Screenshot%202025-02-19%20125541.png)