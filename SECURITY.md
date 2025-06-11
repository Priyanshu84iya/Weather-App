# 🛡️ Security Guidelines for Weather App Development

## 🔐 Confidential Files Protection

This project uses `.gitignore` to protect sensitive information from being committed to version control.

### 📋 Protected File Types

#### API Keys & Configuration
- `config.js` - Contains your personal API keys
- `.env` files - Environment variables
- `*.key` files - Any key files
- `secrets.json` - Secret configurations
- `credentials.json` - Authentication credentials

#### Development Files
- `*.bak` - Backup files
- `*.tmp` - Temporary files
- `.vscode/` - VS Code settings
- `node_modules/` - Dependencies (if using Node.js)

#### System Files
- `.DS_Store` (macOS)
- `Thumbs.db` (Windows)
- Editor swap files

## 🚀 Setup Instructions for New Developers

### 1. Clone the Repository
```bash
git clone <repository-url>
cd weather-app
```

### 2. Set Up Configuration
```bash
# Copy the example configuration
copy config.example.js config.js  # Windows
# OR
cp config.example.js config.js    # macOS/Linux
```

### 3. Get Your API Key
- Visit [OpenWeatherMap API](https://openweathermap.org/api)
- Create a free account
- Generate your API key
- Add it to `config.js`

### 4. Verify Setup
- Open the app in a browser
- Check the console for any API key errors
- Test the weather search functionality

## ⚠️ Important Security Rules

### ❌ NEVER DO:
- Commit `config.js` to git
- Share your personal API keys
- Push sensitive data to public repositories
- Include API keys in screenshots or documentation

### ✅ ALWAYS DO:
- Use `config.example.js` as a template
- Keep your `config.js` file local only
- Regenerate API keys if accidentally exposed
- Use environment variables in production

## 🔍 Checking Git Status

Before committing, always verify sensitive files are ignored:

```bash
# Check what files will be committed
git status

# Verify specific files are ignored
git check-ignore config.js

# Should return: config.js (confirming it's ignored)
```

## 🛠️ Troubleshooting

### "API Key Not Configured" Error
1. Ensure `config.js` exists
2. Check that your API key is correctly set
3. Verify the config.js file is loaded before script.js

### File Not Being Ignored
1. Check `.gitignore` syntax
2. Remove file from git cache: `git rm --cached filename`
3. Commit the .gitignore changes

### Need to Share Configuration
- Only share `config.example.js`
- Document any new required configuration options
- Update this security guide as needed

## 📞 Support

If you encounter any security or configuration issues:
1. Check this guide first
2. Verify your `.gitignore` is working
3. Ask team lead for help (don't share actual keys!)

---
🔒 **Remember: Security is everyone's responsibility!**
