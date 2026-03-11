import os, warnings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'EMPTHYFIRST.settings')
warnings.filterwarnings('ignore')

import django
django.setup()

from django.template.loader import render_to_string

class FakeUser:
    username = 'testuser5'
    is_authenticated = True

class FakeRequest:
    user = FakeUser()
    method = 'GET'

out = render_to_string('dashboard.html', {'request': FakeRequest()})
bad = [(i, l.strip()) for i, l in enumerate(out.split('\n')) if '{{' in l]
print(f'Found {len(bad)} line(s) with unrendered tags:')
for lineno, content in bad:
    print(f'  HTML line {lineno}: {content[:160]}')
