#!/usr/bin/env node

console.log('🎨 Setting up Sanity CMS for ShopCart Pro...\n');

console.log('📋 Follow these steps to set up Sanity:');
console.log('');
console.log('1️⃣  Visit https://www.sanity.io/ and create a free account');
console.log('2️⃣  Create a new project or run: npm create sanity@latest');
console.log('3️⃣  Get your Project ID from https://www.sanity.io/manage');
console.log('4️⃣  Generate API tokens:');
console.log('    - Go to API section in your project');
console.log('    - Create Editor token for SANITY_API_TOKEN');
console.log('    - Create Viewer token for SANITY_API_READ_TOKEN');
console.log('');
console.log('5️⃣  Update your .env file with:');
console.log('    NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id');
console.log('    SANITY_API_TOKEN=your_editor_token');
console.log('    SANITY_API_READ_TOKEN=your_viewer_token');
console.log('');
console.log('🚀 After setup, restart the dev server: npm run dev');
console.log('');
console.log('📚 Need help? Check: https://www.sanity.io/docs/getting-started');