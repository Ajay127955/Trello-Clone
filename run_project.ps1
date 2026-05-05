# Kill any existing servers
Write-Host "Cleaning up old processes..." -ForegroundColor Yellow
Get-Process -Name "python" -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 1

# Clear pycache to fix stale AI imports
Write-Host "Clearing Python cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force "backend\kanban\__pycache__" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "backend\config\__pycache__" -ErrorAction SilentlyContinue

# Start Backend
Write-Host "Starting Django backend on port 8000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location 'e:\Trello Project\backend'; .\venv\Scripts\activate; python manage.py runserver 127.0.0.1:8000"

# Wait for backend to initialize
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting React frontend on port 5173..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location 'e:\Trello Project\frontend'; npm run dev"

Write-Host "`n✅ Both servers are starting!" -ForegroundColor Cyan
Write-Host "Backend: http://127.0.0.1:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Cyan
