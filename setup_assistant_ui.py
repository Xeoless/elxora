import subprocess
import os
import getpass

def run(cmd, check=True):
    print(f"Running: {cmd}")
    subprocess.run(cmd, shell=True, check=check)

print("assistant-ui Setup Script (Python version)")

create_new = input("Create a NEW project? (y/n): ").strip().lower() == 'y'

if create_new:
    print("\nCreating new project...")
    run("npx assistant-ui@latest create")
    print("→ cd into the new folder and re-run this script with 'n'")
    exit()

print("\nSetting up in current directory...")

run("npx assistant-ui@latest init")
run("npx shadcn@latest add https://r.assistant-ui.com/thread.json https://r.assistant-ui.com/thread-list.json")
run("npm install @assistant-ui/react @assistant-ui/react-ai-sdk ai @ai-sdk/openai")

api_key = getpass.getpass("\nEnter OpenAI API key (hidden): ")

env_path = ".env.local"
with open(env_path, "a") as f:
    f.write(f'\nOPENAI_API_KEY="{api_key}"\n')

print("\nDone! Next:")
print("1. Add /app/api/chat/route.ts if needed (copy from docs)")
print("2. npm run dev")
