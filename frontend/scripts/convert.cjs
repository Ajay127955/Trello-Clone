const fs = require('fs');
const path = require('path');

const UI_DIR = path.join(__dirname, '../../stitch_trello_full_ui_clone');
const OUT_DIR = path.join(__dirname, '../src/pages/generated');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Convert snake_case to PascalCase
const toPascalCase = (str) => {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

const convertHtmlToJsx = (html) => {
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return '';
  let bodyContent = bodyMatch[1];

  // Basic replacements
  let jsx = bodyContent
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/readonly/g, 'readOnly')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/autofocus/g, 'autoFocus')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    // Handle self-closing tags
    .replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />')
    .replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr([^>]*?)>/g, '<hr$1 />');

  // Convert inline styles like style="font-variation-settings: 'FILL' 1;"
  jsx = jsx.replace(/style="([^"]+)"/g, (match, p1) => {
    const styleObj = {};
    p1.split(';').forEach(rule => {
      if (rule.trim() === '') return;
      let [key, value] = rule.split(':');
      if (!key || !value) return;
      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObj[key] = value.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  return jsx;
};

const processDirectories = () => {
  const dirs = fs.readdirSync(UI_DIR);
  let routes = [];

  dirs.forEach(dir => {
    const dirPath = path.join(UI_DIR, dir);
    if (fs.statSync(dirPath).isDirectory()) {
      const htmlFile = path.join(dirPath, 'code.html');
      if (fs.existsSync(htmlFile)) {
        const html = fs.readFileSync(htmlFile, 'utf8');
        let jsxContent = convertHtmlToJsx(html);
        
        const componentName = toPascalCase(dir);
        
        const componentCode = `import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ${componentName} = () => {
  const navigate = useNavigate();
  return (
    <>
      ${jsxContent}
    </>
  );
};

export default ${componentName};
`;
        fs.writeFileSync(path.join(OUT_DIR, `${componentName}.jsx`), componentCode);
        console.log(`Generated ${componentName}.jsx`);
        
        // Save route info
        routes.push({
          path: `/${dir.replace(/_/g, '-')}`,
          component: componentName
        });
      }
    }
  });

  // Generate a routing helper file
  const routeCode = `import React from 'react';
import { Routes, Route } from 'react-router-dom';
${routes.map(r => `import ${r.component} from './${r.component}';`).join('\n')}

export const GeneratedRoutes = () => (
  <Routes>
    ${routes.map(r => `<Route path="${r.path}" element={<${r.component} />} />`).join('\n    ')}
  </Routes>
);
`;
  fs.writeFileSync(path.join(OUT_DIR, 'GeneratedRoutes.jsx'), routeCode);
  console.log('Generated GeneratedRoutes.jsx');
};

processDirectories();
