"""Fix all multiline Django template tags in dashboard.html using CRLF-aware approach"""
import re

path = r'c:\Users\Admin\Documents\EMPATHYFIRST\templates\dashboard.html'

with open(path, 'rb') as f:
    raw = f.read()

# Work with string, keeping CRLF
content = raw.decode('utf-8')

print("=== Before fix ===")
for i, line in enumerate(content.split('\r\n'), 1):
    if '{{' in line and '}}' not in line:
        print(f'  Line {i} has unclosed {{{{: {line.strip()[:100]}')
    if '}}' in line and '{{' not in line and 'request.user' not in line:
        # might be a closing tag
        pass

# Fix pattern: a line ending with {{ ... (no }}) immediately followed by }} on next line(s)
# Use CRLF-aware regex
fixed = re.sub(
    r'(\{\{[^\}\r\n]+)\r\n(\s*\}\})',
    lambda m: m.group(1) + m.group(2).strip(),
    content
)

print("\n=== After fix ===")
remaining = []
for i, line in enumerate(fixed.split('\r\n'), 1):
    if '{{' in line and '}}' not in line:
        remaining.append((i, line.strip()[:100]))
        print(f'  Still broken line {i}: {line.strip()[:100]}')

if not remaining:
    print('  All template tags are now on single lines!')

with open(path, 'wb') as f:
    f.write(fixed.encode('utf-8'))

print('\nFile saved.')
