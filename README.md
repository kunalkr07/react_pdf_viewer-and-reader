# React + Vite

- Using react and vite for task. Make vite more fast for setup project.

# About the task:-->

# Navbar component:
- Logo icon for toggle sidebar
- serach-bar for search functionality

## PDFList Component:
- Fetches a list of PDFs from an API.
- Displays PDF name, author, and publication date.
- Filters the list based on the search query.
- Passes the selected PDF link to the parent component when the "View PDF" button is clicked.

## PDFViewer Component:
- Displays the selected PDF in an iframe.
- The iframe is responsive and adjusts based on screen size.
- It is styled to provide a clean and centered viewing experience.

## Fetch PDF Data from API
- The application fetches PDF data from an external API (https://api.npoint.io/dee51ea017d20efdfcc8) and displays it in a list format.

- Each item in the list includes the PDF's name, author, published date, and a     link  to the PDF file.

# Features

## Search and Filter Functionality
- A search bar allows users to filter the list of PDFs based on the PDF name.
  Currently, two official plugins are available:
- The search query is dynamically applied, and only matching results are displayed in the list.

## View PDF in Dedicated Viewer
- Each PDF in the list has a "View PDF" button that, when clicked, passes the selected PDF's link to the PDFViewer component.

- The selected PDF is then displayed in an embedded iframe within the PDFViewer component.

## Styling and User Experience

- The list of PDFs is presented as styled cards, each displaying the PDF's title, author, and published date.

- The cards have a hover effect for better interaction feedback.

- The application uses a clean and minimalistic design with a focus on user   experience.

## Error Handling

- The app gracefully handles errors when fetching data from the API and displays a user-friendly message if no results are found or an error occurs during the fetch.

## There are two plugin for the project

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Used stacks
- used hooks for manage the state and pass data from one to other components. Mostly used hooks like useState,useEffect,useNavigation.

-Used tech like, Html,Css and react for make SPA(single page application) page.


## Technologies Used:
- React
- React Router for navigation
- Hooks for managing hooks
- CSS for styling
- External API (https://api.npoint.io) for PDF data


# Working 
- Here in the navbar has a logo icon, when click on logo icon sidebar open. Inside the sidebar has about component. On the navbar also hav serach option, where u can serach book name, if book name is not available they message not found.

- For styling i use plain css and bootsrtap css combination for make attaractive user interface.

- For card animation i use a animation library called "animate.css" where card looks atractive.

- First component has rendered list view in the form of cards . In cards have book name,author , published, and pdf linke embedded in button . When u click on button file open in second pdfview component when you can read and search.