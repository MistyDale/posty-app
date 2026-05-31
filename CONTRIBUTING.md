# Contributing to Posty

Thank you for your interest in contributing to Posty! We welcome contributions from everyone. Here's how you can help.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Git

### Setting Up Your Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/posty-app.git
   cd posty-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser

## Adding Blog Posts

There are two ways to add posts to Posty:

### Method 1: Using the Web Form (Recommended)

1. Start the app with `npm start`
2. Navigate to http://localhost:3000
3. Click the **+ New Post** button
4. Enter your post title and content in Markdown format
5. Click **Publish Post**

### Method 2: Adding Files Directly

1. Create a new `.md` file in the `posts/` folder
2. Use the format: `your-post-title.md`
3. Start your post with a Markdown heading:
   ```markdown
   # Your Post Title
   
   Your post content here...
   ```
4. Restart the server if it's running
5. Your post will appear on the homepage

## Post Guidelines

- **File naming**: Use lowercase with hyphens (e.g., `my-awesome-post.md`)
- **Title**: Start with an H1 heading (`# Title`)
- **Format**: Write in standard Markdown
- **Length**: Any length is welcome
- **Topics**: Blog posts on Node.js, web development, Posty tips, and tutorials are welcome

## Markdown Features Supported

Posty supports all standard Markdown:

- **Headers**: `# H1`, `## H2`, etc.
- **Emphasis**: `**bold**`, `*italic*`, `***bold italic***`
- **Lists**: Ordered (`1.`) and unordered (`-`)
- **Code blocks**: Use triple backticks with optional language
- **Inline code**: Wrap in backticks
- **Links**: `[text](url)`
- **Blockquotes**: Start lines with `>`
- **Horizontal rules**: `---`

## Code Contributions

### Before You Start

- Check existing issues to avoid duplicating work
- For major changes, open an issue first to discuss
- Keep changes focused and atomic

### Making Changes

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test locally:
   ```bash
   npm start
   ```
4. Commit with clear messages:
   ```bash
   git commit -m "Add feature: brief description"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

### Submitting a Pull Request

1. Go to the original repository
2. Click **New Pull Request**
3. Select your branch
4. Provide a clear description of your changes
5. Reference any related issues
6. Submit for review

## Project Structure

```
posty-app/
├── server.js          # Express server and routes
├── package.json       # Dependencies
├── posts/             # Markdown blog posts
├── views/             # EJS templates
│   ├── index.ejs      # Homepage
│   ├── post.ejs       # Post view
│   ├── new-post.ejs   # Post form
│   └── 404.ejs        # Error page
└── README.md          # Project documentation
```

## Code Style

- Use consistent indentation (2 spaces)
- Use descriptive variable names
- Keep functions focused and single-purpose
- Add comments for complex logic

## Reporting Issues

Found a bug? Please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Browser/Node.js version
- Screenshots if applicable

## Questions?

Feel free to open an issue or discussion if you have questions. We're here to help!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Happy blogging! 📝
