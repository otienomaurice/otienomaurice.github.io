$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $MyInvocation.MyCommand.Path
$node = "C:\Users\otien\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$port = "8081"
$url = "http://localhost:$port/template-preview.html"

Set-Location $workspace

$listener = Get-NetTCPConnection -LocalPort ([int]$port) -ErrorAction SilentlyContinue |
  Where-Object { $_.State -eq "Listen" } |
  Select-Object -First 1

if (-not $listener) {
  $serverCommand = "cd `"$workspace`"; `$env:PORT=`"$port`"; & `"$node`" server.mjs"
  Start-Process -FilePath "powershell.exe" -ArgumentList @("-NoExit", "-Command", $serverCommand) -WindowStyle Hidden
  Start-Sleep -Seconds 2
}

Start-Process $url
