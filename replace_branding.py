import glob

for f in glob.glob('frontend/src/pages/**/*.jsx', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'Trello' in content:
        new_content = content.replace('Trello Clone', 'Productive Flow').replace('Trello', 'Productive Flow')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")
