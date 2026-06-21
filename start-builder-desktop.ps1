$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $MyInvocation.MyCommand.Path
$desktopBuilder = Join-Path $workspace "desktop-builder"
$pnpm = "C:\Users\otien\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd"
$node = "C:\Users\otien\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"

if (-not (Test-Path $pnpm)) {
  throw "Bundled pnpm was not found at $pnpm"
}

$env:PATH = "$node;$env:PATH"
Set-Location $desktopBuilder

if (-not (Test-Path (Join-Path $desktopBuilder "node_modules"))) {
  & $pnpm install
}

& $pnpm run dev
