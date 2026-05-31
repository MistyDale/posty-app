const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const MarkdownIt = require('markdown-it');

const app = express();
const md = new MarkdownIt();
const PORT = 3000;
const POSTS_DIR = path.join(__dirname, 'posts');

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Helper function to get all posts
function getPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  return files.map(file => {
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const slug = file.replace('.md', '');
    
    // Extract title from first line if it starts with #
    let title = slug;
    const firstLine = content.split('\n')[0];
    if (firstLine.startsWith('#')) {
      title = firstLine.replace(/^#+\s+/, '').trim();
    }
    
    return {
      slug,
      title,
      file,
      content
    };
  });
}

// Home - List all posts
app.get('/', (req, res) => {
  const posts = getPosts();
  res.render('index', { posts });
});

// View individual post
app.get('/post/:slug', (req, res) => {
  const { slug } = req.params;
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).render('404');
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const htmlContent = md.render(content);
  
  // Extract title
  let title = slug;
  const firstLine = content.split('\n')[0];
  if (firstLine.startsWith('#')) {
    title = firstLine.replace(/^#+\s+/, '').trim();
  }
  
  res.render('post', { title, content: htmlContent });
});

// New post form
app.get('/new', (req, res) => {
  res.render('new-post');
});

// Create new post
app.post('/new', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).render('new-post', { error: 'Title and content are required' });
  }
  
  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  
  // Prevent overwriting existing posts
  if (fs.existsSync(filePath)) {
    return res.status(400).render('new-post', { error: 'A post with this title already exists' });
  }
  
  // Write the file with title as markdown h1
  const markdownContent = `# ${title}\n\n${content}`;
  fs.writeFileSync(filePath, markdownContent);
  
  res.redirect(`/post/${slug}`);
});

app.listen(PORT, () => {
  console.log(`Blog app running at http://localhost:${PORT}`);
});
