
The project is built using Vite

Find the demo here: https://tanstack-pagination-moin.netlify.app/

## Installation

Clone the repository - https://github.com/mohiyuddinshaikh/tanstack-pagination

In project root - Install dependencies and run the project

```bash
    npm i
    npm run dev
```

Build for production:

```bash
    npm run build
```

Preview production build:

```bash
    npm run preview
```
    
API Endpoint:

```bash
    https://dummyjson.com/products?limit=10&skip=0
```

Pagination Logic:

1. The API requires two parameters: limit (how many records need to be displayed) and skip(how many records need to be skipped for this request)
2. limit is set to 10 and for skip we say ((currentPage - 1) * limit)
3. For Tanstack - we pass staleTime and cacheTime(gcTime) that takes care of refetching the data when staleTime is up and cacheTime determines for how long the data should be kept after it is inactive (component unmounted)
4. I have also implemented prefetching - So if we are on page 1, the data for page 2 is fetched in the background so when I navigate to page 2 the transition looks seamless.
5. For UI - We have the following buttons - 
First, Prev, 5 pages window size (1,2,3,4,5), Next Last.
6. Our API returns totalPages, that is how we know what 'skip' value needs to be passed for "Last". We also disable these buttons according to the situation and when the state is loading.
