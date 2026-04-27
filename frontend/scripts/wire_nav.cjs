const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '../src/pages/generated');

const navMap = [
  { regex: /<button([^>]*)>Log in<\/button>/g, to: '/login' },
  { regex: /<button([^>]*)>Get Trello for free<\/button>/g, to: '/sign-up' },
  { regex: /<button([^>]*)>\s*Sign up - it(?:'|’)s free\s*<\/button>/g, to: '/sign-up' },
  { regex: /<button([^>]*)>\s*Log In\s*<\/button>/g, to: '/boards-dashboard' },
  { regex: /<button([^>]*)>\s*Sign Up\s*<\/button>/g, to: '/boards-dashboard' },
  
  // Replace <a href="#"> with Links
  { regex: /<a([^>]*href="#")([^>]*)>Boards<\/a>/g, replace: `<a$1$2 onClick={() => navigate('/boards-dashboard')}>Boards</a>` },
  { regex: /<a([^>]*href="#")([^>]*)>Settings<\/a>/g, replace: `<a$1$2 onClick={() => navigate('/workspace-settings')}>Settings</a>` },
  { regex: /<a([^>]*href="#")([^>]*)>Members<\/a>/g, replace: `<a$1$2 onClick={() => navigate('/workspace-members')}>Members</a>` },
  { regex: /<a([^>]*href="#")([^>]*)>Pricing<\/a>/g, replace: `<a$1$2 onClick={() => navigate('/pricing-plans')}>Pricing</a>` },
  { regex: /<a([^>]*href="#")([^>]*)>Help<\/a>/g, replace: `<a$1$2 onClick={() => navigate('/help-center')}>Help</a>` },

  // Replace common bottom nav links and sidebars where they use divs or a tags
  { regex: /<span([^>]*)>Boards<\/span>/g, wrap: 'boards-dashboard' },
];

const wireNavigation = () => {
  const files = fs.readdirSync(DIR);
  
  files.forEach(file => {
    if (!file.endsWith('.jsx')) return;
    const filePath = path.join(DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Apply button routing
    content = content.replace(/<button([^>]*)>Log in<\/button>/g, `<button$1 onClick={() => navigate('/login')}>Log in</button>`);
    content = content.replace(/<button([^>]*)>Get Trello for free<\/button>/g, `<button$1 onClick={() => navigate('/sign-up')}>Get Trello for free</button>`);
    content = content.replace(/<button([^>]*)>\s*Sign up - it(?:'|’)s free\s*<\/button>/g, `<button$1 onClick={() => navigate('/sign-up')}>Sign up - it's free</button>`);
    
    // Auth flow
    if (file === 'Login.jsx') {
      content = content.replace(/<button([^>]*)>\s*Log In\s*<\/button>/g, `<button$1 onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Log In</button>`);
    }
    if (file === 'SignUp.jsx') {
      content = content.replace(/<button([^>]*)>\s*Create Account\s*<\/button>/g, `<button$1 onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Create Account</button>`);
    }

    // Boards dashboard to Board View
    if (file === 'BoardsDashboard.jsx') {
      content = content.replace(/<div([^>]*class="group relative h-28[^"]*"[^>]*)>/g, `<div$1 onClick={() => navigate('/board-view')}>`);
    }

    // Board View to Card Detail
    if (file === 'BoardView.jsx') {
      content = content.replace(/<div([^>]*class="bg-white p-3 rounded-lg[^"]*"[^>]*)>/g, `<div$1 onClick={() => navigate('/card-detail-view')}>`);
    }

    // Card Detail to Advanced Detail
    if (file === 'CardDetailView.jsx') {
      content = content.replace(/<button([^>]*)>\s*Advanced\s*<\/button>/gi, `<button$1 onClick={() => navigate('/advanced-card-detail')}>Advanced</button>`);
    }

    // Replace all placeholder href="#" with generic navigation if possible, or leave them.
    content = content.replace(/<a([^>]*)href="#"([^>]*)>Boards<\/a>/g, `<a$1$2 onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>`);
    content = content.replace(/<a([^>]*)href="#"([^>]*)>Settings<\/a>/g, `<a$1$2 onClick={(e) => { e.preventDefault(); navigate('/workspace-settings'); }}>Settings</a>`);
    content = content.replace(/<a([^>]*)href="#"([^>]*)>Members<\/a>/g, `<a$1$2 onClick={(e) => { e.preventDefault(); navigate('/workspace-members'); }}>Members</a>`);

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Wired navigation in ${file}`);
    }
  });
};

wireNavigation();
