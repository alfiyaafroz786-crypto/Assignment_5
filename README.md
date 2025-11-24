# React Custom Hook – useFetch()
    > A simple React project demonstrating how to build and use a custom hook (useFetch) to fetch data from any API endpoint.
    > The UI allows switching between Products API and Users API, and displays results using beautiful cards.

## Features
    > Custom Hook: useFetch()
    > Handles loading, error, and data states
    > Uses useState, useEffect, and useCallback
    > Fetches data from multiple API endpoints
    > Auto-renders cards based on selected API

## Installation & Setup
    > Clone the repository:
        >> git clone https://github.com/alfiyaafroz786-crypto/assignment_5
    > Install dependencies: 
        >> npm install
    > Start development server:
        >> npm run dev

## About Assignment

    1. Custom Hook — useFetch(url)

    > This Hook:
        >> Fetches data from any API
        >> Manages loading, error, and data
        >> Re-fetches automatically when the URL changes
    > Logic flow:
        >> loading = true
        >> Fetch API
        >> If successful → update data
        >> If failed → set error
        >> Always stop loader after fetch
    > Code:
        >> const { data, loading, error } = useFetch(activeURL);

    2. ApiTester Component

    > This component:
        >> Stores the active API URL in useState
        >> Contains buttons to change the API (Products / Users)
        >> Calls useFetch() whenever URL changes
        >> Displays results in cards
    > URLs used:
        >> Products - https://api.escuelajs.co/api/v1/products
        >> Users - https://jsonplaceholder.typicode.com/users
    
    3. UI Logic

    > Buttons:
        <button onClick={() => setActiveURL(PRODUCTS)}>Products</button>
        <button onClick={() => setActiveURL(USERS)}>Users</button>
    > Loading & Error:
        {loading && <p> Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
    > Dynamic Cards
        If URL = Products - show image, title, price
        If URL = Users - show name, email, username

## Technologies
    > React
    > JavaScript
    > Vite
    > Custom Hooks
    > Fetch API
    
## Netlify URL - https://alfiyaafroz-assignment5.netlify.app/


