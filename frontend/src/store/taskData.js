
const taskData = {
    html: [
        {
            id: 1,
            title: "Semantic Structure",
            detail: "Build a semantic HTML layout using proper tags.",
            link: "https://my-stay-mate.vercel.app/",
            code: "https://github.com/laxminarayan-dev/talkio"
        },
        {
            id: 2,
            title: "Forms & Validation",
            detail: "Create accessible forms with native validation attributes.",
            link: "https://github.com/yourusername/html-forms-validation",
        },
        {
            id: 3,
            title: "Tables & Lists",
            detail: "Present data via tables and nested lists effectively.",
            link: "https://github.com/yourusername/html-tables-lists",
        },
        {
            id: 4,
            title: "Media Embeds",
            detail: "Embed images, audio, and video with captions.",
            link: "https://github.com/yourusername/html-media-embeds",
        },
        {
            id: 5,
            title: "Metadata & SEO",
            detail: "Use meta tags, title, and alt text correctly.",
            link: "https://github.com/yourusername/html-metadata-seo",
        },
    ],
    "html-css": [
        {
            id: 1,
            title: "Responsive Grid",
            detail: "Implement a responsive grid for a gallery.",
            link: "https://github.com/yourusername/responsive-grid-gallery",
        },
        {
            id: 2,
            title: "Flexbox Layout",
            detail: "Create a header/footer layout with flexbox.",
            link: "https://github.com/yourusername/flexbox-layout",
        },
        {
            id: 3,
            title: "Typography",
            detail: "Style headings, paragraphs, and links consistently.",
            link: "https://github.com/yourusername/typography-styles",
        },
        {
            id: 4,
            title: "Theme Toggle",
            detail: "Add light/dark theme using CSS variables.",
            link: "https://github.com/yourusername/theme-toggle",
        },
    ],
    "html-css-js": [
        {
            id: 1,
            title: "Modal Component",
            detail: "Build a modal with open/close and focus trap.",
            link: "https://github.com/yourusername/modal-component",
        },
        {
            id: 2,
            title: "Form Handling",
            detail: "Validate and submit forms with client-side JS.",
            link: "https://github.com/yourusername/form-handling-js",
        },
        {
            id: 3,
            title: "Tabs & Accordion",
            detail: "Create interactive tabs and accordion UI.",
            link: "https://github.com/yourusername/tabs-accordion",
        },
    ],
    react: [
        {
            id: 1,
            title: "Stateful Counter",
            detail: "Create a counter with increment/decrement and reset.",
            link: "https://github.com/yourusername/react-counter",
        },
        {
            id: 2,
            title: "Fetch API",
            detail: "Load data with hooks and show loading/error states.",
            link: "https://github.com/yourusername/react-fetch-api",
        },
        {
            id: 3,
            title: "Todo List",
            detail: "CRUD todos with local state and effects.",
            link: "https://github.com/yourusername/react-todo-list",
        },
        {
            id: 4,
            title: "Context API Setup",
            detail: "Build a theme context provider with light/dark mode.",
            link: "https://github.com/yourusername/react-context-api",
        },
        {
            id: 5,
            title: "Custom Hooks",
            detail: "Create useFetch, useLocalStorage, and useDebounce hooks.",
            link: "https://github.com/yourusername/react-custom-hooks",
        },
        {
            id: 6,
            title: "Form Validation",
            detail: "Build a form with validation using controlled components.",
            link: "https://github.com/yourusername/react-form-validation",
        },
        {
            id: 7,
            title: "Search Filter",
            detail: "Implement real-time search with state and filtering.",
            link: "https://github.com/yourusername/react-search-filter",
        },
        {
            id: 8,
            title: "Pagination",
            detail: "Create pagination controls for a large dataset.",
            link: "https://github.com/yourusername/react-pagination",
        },
        {
            id: 9,
            title: "Shopping Cart",
            detail: "Build a cart with add/remove/update quantity features.",
            link: "https://github.com/yourusername/react-shopping-cart",
        },
        {
            id: 10,
            title: "User Authentication",
            detail: "Implement login/logout with state and persistence.",
            link: "https://github.com/yourusername/react-authentication",
        },
        {
            id: 11,
            title: "Photo Gallery",
            detail: "Create an image gallery with lightbox and navigation.",
            link: "https://github.com/yourusername/react-photo-gallery",
        },
        {
            id: 12,
            title: "Weather App",
            detail: "Fetch weather data and display with conditional rendering.",
            link: "https://github.com/yourusername/react-weather-app",
        },
        {
            id: 13,
            title: "Blog Comments",
            detail: "Build nested comments with add, edit, delete functionality.",
            link: "https://github.com/yourusername/react-blog-comments",
        },
        {
            id: 14,
            title: "User Dashboard",
            detail: "Create a dashboard with charts and profile info.",
            link: "https://github.com/yourusername/react-user-dashboard",
        },
        {
            id: 15,
            title: "Real-time Chat",
            detail: "Build a chat interface with messages and user list.",
            link: "https://github.com/yourusername/react-chat-app",
        },
        {
            id: 16,
            title: "Movie Database",
            detail: "Fetch and display movies with filters and search.",
            link: "https://github.com/yourusername/react-movie-database",
        },
        {
            id: 17,
            title: "Drag & Drop",
            detail: "Implement drag and drop for tasks or items.",
            link: "https://github.com/yourusername/react-drag-drop",
        },
        {
            id: 18,
            title: "Social Feed",
            detail: "Build a feed with posts, likes, and comments.",
            link: "https://github.com/yourusername/react-social-feed",
        },
        {
            id: 19,
            title: "Expense Tracker",
            detail: "Track expenses with categories and monthly reports.",
            link: "https://github.com/yourusername/react-expense-tracker",
        },
        {
            id: 20,
            title: "Notification System",
            detail: "Create toast/alert notifications with auto-dismiss.",
            link: "https://github.com/yourusername/react-notification-system",
        },
        {
            id: 21,
            title: "Video Player",
            detail: "Build a custom video player with controls and playlist.",
            link: "https://github.com/yourusername/react-video-player",
        },
        {
            id: 22,
            title: "Music Playlist",
            detail: "Create a music player with play queue and metadata.",
            link: "https://github.com/yourusername/react-music-playlist",
        },
        {
            id: 23,
            title: "E-commerce Checkout",
            detail: "Build a multi-step checkout flow with validation.",
            link: "https://github.com/yourusername/react-ecommerce-checkout",
        },
    ],
};

export default taskData;