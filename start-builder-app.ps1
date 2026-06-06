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

$browserCandidates = @(
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
)

$browser = $browserCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1

if ($browser) {
  Start-Process -FilePath $browser -ArgumentList @("--app=$url", "--new-window")
} else {
  Start-Process $url
}
