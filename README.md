# Posty - Simple Markdown Blog

A lightweight, easy-to-use blog application built with Node.js and Express. Write posts in Markdown, display them beautifully, and add new posts through a simple web form.

## Features

✨ **Markdown Support** - Write posts in clean, simple Markdown format  
📝 **Easy Post Creation** - Add new posts via a web form  
🎨 **Beautiful UI** - Responsive design with gradient backgrounds  
📂 **File-Based** - Posts are stored as markdown files (no database needed)  
⚡ **Fast & Lightweight** - Minimal dependencies, quick to set up  

## Project Structure

```
Posty App/
├── server.js           # Main Express server
├── package.json        # Project dependencies
├── posts/              # Markdown post files
│   ├── getting-started.md
│   └── markdown-guide.md
└── views/              # EJS templates
    ├── index.ejs       # Homepage (post list)
    ├── post.ejs        # Individual post view
    ├── new-post.ejs    # Create post form
    └── 404.ejs         # Not found page
```

## Installation

1. Make sure you have Node.js installed (v12 or higher)
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the App

Start the development server:

```bash
npm start
```

Or use:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Usage

### Viewing Posts

- Visit the homepage to see all published posts
- Click on any post title to read the full post

### Creating a New Post

1. Click the **+ New Post** button
2. Enter your post title
3. Write your content in Markdown
4. Click **Publish Post**

The new post will immediately appear on your blog and get its own URL based on the title.

### Post Files

Posts are stored in the `posts/` folder as `.md` files. You can also:
- Edit files directly in the `posts/` folder
- Delete posts by removing the markdown file
- Add posts manually by creating `.md` files

## Dependencies

- **express** - Web framework
- **markdown-it** - Markdown parser
- **body-parser** - Request body parsing
- **ejs** - Templating engine

## Customization

### Styling

All CSS is inline in the EJS templates. Feel free to customize colors, fonts, and layouts by editing the `<style>` sections in:
- `views/index.ejs` - Homepage styles
- `views/post.ejs` - Post view styles
- `views/new-post.ejs` - Form styles

### Port

To change the port, edit the `PORT` variable in `server.js`:

```javascript
const PORT = 3000; // Change this
```

### Post Directory

To change where posts are stored, edit the `POSTS_DIR` variable in `server.js`:

```javascript
const POSTS_DIR = path.join(__dirname, 'posts'); // Change 'posts' to another folder
```

## Tips

- Post URLs are generated from titles by converting to lowercase and replacing spaces with hyphens
- The first line of a post that starts with `#` is treated as the title
- If no title header exists, the filename is used as the title
- All Markdown features are supported (headers, lists, code blocks, blockquotes, etc.)

## License

MIT

## Getting Started

1. Start the server with `npm start`
2. Open http://localhost:3000 in your browser
3. Click on the sample posts to see how they look
4. Try creating a new post to see how easy it is!

Happy blogging! 📝
