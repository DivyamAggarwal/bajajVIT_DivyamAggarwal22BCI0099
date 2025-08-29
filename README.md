# Bajaj Finserv Health API Documentation

- **Name:** Divyam Aggarwal  
- **Registration Number:** 22BCI0099  
- **Email:** [mailtodivyam1@gmail.com](mailto:mailtodivyam1@gmail.com)  

## Overview

This documentation outlines the functionality and usage of a REST API for processing arrays of mixed data types. The API can separate numbers, alphabets, and special characters from input arrays, perform calculations, and return structured responses.

**Live API URL:** https://bajaj-vit-divyam-aggarwal22-bci-009.vercel.app/bfhl



## Features

- Process mixed arrays containing numbers, alphabets, and special characters
- Separate odd numbers, even numbers, and alphabets
- Identify and categorize special characters
- Calculate sum of numeric values
- Create concatenated strings from alphabetical characters
- Health check endpoint for monitoring
- Deployed on Vercel for production use

## API Endpoints

### POST /bfhl
Process an array of mixed data types and return categorized results.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["a", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "aR"
}
```

### GET /health
Check the server status and health.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DivyamAggarwal/bajajVIT_DivyamAggarwal22BCI0099
   cd bfhl-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Test the API:**
   ```bash
   curl -X POST http://localhost:3000/bfhl \
   -H "Content-Type: application/json" \
   -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
   ```

## Test Cases

### Test Case 1: Mixed Input
**Input:** `["a", "1", "334", "4", "R", "$"]`

**Description:** The API correctly identifies and separates odd numbers, even numbers, alphabets, and special characters. It also calculates the sum of the numbers and creates the concatenated string.

**Response:**
<img width="600" alt="Test Case 1 Request" src="https://github.com/user-attachments/assets/38ceb097-15c8-4ecf-84eb-5e7c37e7c0ba" />
<img width="600" alt="Test Case 1 Response" src="https://github.com/user-attachments/assets/661dd94c-5f40-4635-a806-54decd1be9ab" />

---

### Test Case 2: Diverse Mixed Input
**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`

**Description:** This case includes a wider variety of inputs, including special characters and a mix of single-digit and multi-digit numbers. The API processes all elements correctly.

**Response:**
<img width="600" alt="Test Case 2 Request" src="https://github.com/user-attachments/assets/2b5f6b66-25f0-4793-9dbe-98902e0a340d" />
<img width="600" alt="Test Case 2 Response" src="https://github.com/user-attachments/assets/c0dc0aa3-7d54-490b-bdd9-c8c23c129a2b" />

---

### Test Case 3: Alphabetical Input Only
**Input:** `["A", "ABcD", "DOE"]`

**Description:** This case demonstrates the API's handling of an input with no numbers or special characters. It returns empty arrays for numbers and special characters, a sum of "0", and a correctly formatted concat_string.

**Response:**
<img width="600" alt="Test Case 3 Request" src="https://github.com/user-attachments/assets/420df5de-883f-4368-a6fb-da98703c37f8" />
<img width="600" alt="Test Case 3 Response" src="https://github.com/user-attachments/assets/9e5d5393-77c6-4a88-b95e-b5e97a017be8" />

---

## API Status Check

You can check the server status with a GET request to the /health endpoint.

- **Endpoint:** `/health`
- **Method:** `GET`
- **Response:** A JSON object indicating the server status and a timestamp.

<img width="600" alt="API Health Check" src="https://github.com/user-attachments/assets/8dde458c-154d-4ced-87b6-3cfbaef7a340" />

## Running Test Files on CLI/CMD

<img width="600" alt="CLI Testing 1" src="https://github.com/user-attachments/assets/b81e09a1-eaaf-4892-b5b8-4188ee98fd90" />
<img width="600" alt="CLI Testing 2" src="https://github.com/user-attachments/assets/0443ee84-c72f-4ab1-a747-464ad00b6e59" />
<img width="600" alt="CLI Testing 3" src="https://github.com/user-attachments/assets/8e64fbe2-2f8d-44b2-a038-a539d84ec4d4" />

## Deployment

### Vercel Deployment

The BFHL API is successfully deployed on Vercel. The deployment details show the status as **Ready** and provide the public domains for accessing the API.

**Main URL:** https://bajaj-vit-divyam-aggarwal22-bci-009.vercel.app

<img width="600" alt="Vercel Deployment Status" src="https://github.com/user-attachments/assets/3c319473-d9ef-4aac-8b63-c9e53dffd7ea" />

### API Health Check

Accessing the base URL in a web browser or through a GET request confirms that the API is running. It provides a simple JSON response listing the available endpoints.

- **Endpoint:** https://bajaj-vit-divyam-aggarwal22-bci-009.vercel.app/
- **Method:** GET

<img width="600" alt="API Base URL Response" src="https://github.com/user-attachments/assets/d0d303af-a327-4ed7-b798-daaa81c81b85" />

## API Test Cases (Deployed Version)

### Test Case 1 (Production)
- **Endpoint:** https://bajaj-vit-divyam-aggarwal22-bci-009.vercel.app/bfhl
- **Method:** POST

<img width="600" alt="Production Test Case 1" src="https://github.com/user-attachments/assets/15289798-cd46-475f-9b33-f2f8120c7f54" />

---

### Test Case 2 (Production)
- **Endpoint:** https://bajaj-vit-divyam-aggarwal22-bci-009.vercel.app/bfhl
- **Method:** POST

<img width="600" alt="Production Test Case 2 Request" src="https://github.com/user-attachments/assets/d79e0a54-4b0c-423e-9c18-fac938fee388" />
<img width="600" alt="Production Test Case 2 Response" src="https://github.com/user-attachments/assets/31581d66-db88-4608-ad1d-1f77bbda0c3f" />

---

### Test Case 3 (Production)
- **Endpoint:** https://bajaj-vit-divyam-aggarwal22-bci-009.vercel.app/bfhl
- **Method:** POST

<img width="600" alt="Production Test Case 3" src="https://github.com/user-attachments/assets/e1db6644-4237-483b-ae58-fc319045536a" />

## Technologies Used

- **Backend Framework:** Node.js
- **Deployment Platform:** Vercel
- **Testing Tools:** Postman/cURL
- **Version Control:** Git





