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
Write-Host "Starting Django backend on network host..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location 'e:\Trello Project\backend'; .\venv\Scripts\activate; python manage.py runserver 0.0.0.0:8000"

# Wait for backend to initialize
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting React frontend on network host..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location 'e:\Trello Project\frontend'; npm run dev -- --host"

Write-Host "`n✅ Both servers are starting on the network!" -ForegroundColor Cyan
Write-Host "Backend: http://10.1.40.205:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://10.1.40.205:5173" -ForegroundColor Cyan
